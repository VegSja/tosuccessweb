//Components
import ActivityTable from '../components/activityTable';
import AddActivityButton from '../components/add_activity_button';
import DatePicker from "./date_picker"
import CategoryDropdown from "./category_dropdown"
import ToastMessage from './toast_message'

import {Button, Modal, Form, Spinner, Alert} from 'react-bootstrap';

import {React, Component, createContext} from 'react';
import { FormGroup } from '@material-ui/core';

//Routing
import { withRouter, Redirect } from "react-router";

//Non-react classes
import API_Connection from "../other/API_connection"
import DateHandler from "../other/dateHandler"

//TODO: Change format of date so that backends accepts
class ActivityComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            activityName : "",
            activityCategory : "",
            activityDate : "",
            activityStartTime : "",
            activityEndTime : "",
            showHide : false,

            loading_data_from_api : true,
            backend_access_token: null,
            backend_refresh_token: null,

            server_error : false,
            error_message : null,

            date_to_view : new Date(),
            dayNumber_to_view : null,

            activities : null,

            colorList : {},
        }

        let routeState;
        if(this.props.location.state){
            localStorage.setItem('routeState', JSON.stringify(this.props.location.state));
            routeState = this.props.location.state;
        } else {
            routeState = localStorage.getItem('routeState');
            if(routeState) routeState = JSON.parse(routeState);
        }
        this.state.backend_access_token = routeState.backend_access_token; //Does this to avoid update of page
        this.state.backend_refresh_token = routeState.backend_refresh_token;


        //Need to bind "this"
        this.submitHandler = this.submitHandler.bind(this)

        this.api_connection = new API_Connection(this.state.backend_access_token, this.state.backend_refresh_token); //We still keep this object and pass it into the table. Still need it to post
        this.dateHandler = new DateHandler();
    }

    componentDidMount(){
        this.initGet()
    }


//TODO : Make a more elegant sulution here.... (Try to use the functions)
//------------------Server stuff----------------------------------------------
    initGet(){
        this.api_connection.get_current_date()
        .then((response) => {
            this.currentdate = this.api_connection.date.date;
            this.currentDayNumber = this.api_connection.date.daynumber;
            this.setState({date_to_view : this.currentdate, dayNumber_to_view : this.currentDayNumber})
            this.api_connection.get_categories().then((res) => {
                this.categories = this.api_connection.categories;
                this.setState({ colorList : this.createColorList(this.categories) })
                this.api_connection.get_activities(this.state.dayNumber_to_view, 4)
                .then((response) => {
                    this.setState({ activities : this.api_connection.activities, loading_data_from_api : false})
                });
            });
        })
        .catch(() => {
            this.api_connection.sendRefreshToken()
            .then(() => {
                this.initGet()
            })
            .catch(() => {
                this.setState({ server_error : true, error_message : this.api_connection.errorMessage });
            })
        })
    }

    GET_date(){
        this.api_connection.get_current_date()
        .then((response) => {
            this.currentdate = this.api_connection.date.date;
            this.currentDayNumber = this.api_connection.date.daynumber;
            this.setState({date_to_view : this.currentdate, dayNumber_to_view : this.currentDayNumber})
        })
        .catch(()=> {
            this.handleServerError(this.GET_date)
        });
    }

    async GET_categories(){
        this.api_connection.get_categories().then((res) => {
            this.categories = this.api_connection.categories;
            this.setState({ colorList : this.createColorList(this.categories) })
            return res
        });
    }

    async GET_activities(){
        this.setState({ loading_data_from_api : true })
        this.api_connection.get_activities(this.state.dayNumber_to_view, 4)
        .then((response) => {
            this.setState({ activities : this.api_connection.activities, loading_data_from_api : false})
        });
    }

    async handleServerError(functionToRetry){
        this.api_connection.sendRefreshToken()
        .then(() => {
            functionToRetry()
        })
        .catch(() => {
            this.setState({ server_error : true, error_message : this.api_connection.errorMessage });
        })

    }

    //Handle input in fab
    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    onDropdownSelect(eventkey, event){
        this.setState({activityCategory : event.target.outerText});
    }

    submitHandler(){
        //This is where you handle the input given. The previous functions should have changed the states to reflect the value inputed. Just use this.state.activityName for instance
        var date = this.dateHandler.convertDateToDDMMMMYYYY(this.state.activityDate);
        var dayNumber = this.dateHandler.convertDateToDayNumber(this.state.activityDate);
        var start_time = this.dateHandler.convertTimeToMinutes(this.state.activityStartTime);
        var end_time = this.dateHandler.convertTimeToMinutes(this.state.activityEndTime);
        this.api_connection.post_activity(this.state.activityName, this.state.activityCategory, start_time, end_time, dayNumber, date)
        .then(() => {
            this.GET_activities();
            this.handleModalShowHide();
        })
        .catch(() => {
            this.api_connection.sendRefreshToken()//Get new access token
            .then(() => {
                this.submitHandler() //Try again
            })
            .catch(() => {
                alert("Could not send activitiy")
            })
        });

    }

    createColorList(categories){
        var colorList = {}
        for(var key in categories){
            colorList[categories[key].name] = categories[key].color;
        }
        return colorList
    }

    render(){
        if (this.state.loading_data_from_api){
            if(this.state.server_error){
                if(this.state.error_message === "Unauthorized"){
                    return(<div><Redirect to="/landing" /></div>)
                }
                else{
                    return(
                        <Alert variant="danger">
                            Server error: {this.state.error_message}
                        </Alert>)
                }
            }
            return(
                <div>
                    <Spinner animation="grow" className="loading-table" />
                </div>
            )
        }
        else{
            return(
                <div>
                    <h1>Here are your activities for the next 4 days!</h1>
                    <DatePicker value={this.state.date_to_view} label="Date:" onChange={e=> this.setState({ date_to_view : e.target.value, dayNumber_to_view : this.dateHandler.convertDateToDayNumber(e.target.value) })}/>
                    {/* The rest of the page */}
                    <ActivityTable activities={this.state.activities} backendAccessToken={this.state.backend_access_token} day_number_to_view={this.state.dayNumber_to_view} colorList={this.state.colorList}/>
                    <AddActivityButton handleClick={() => this.handleModalShowHide()} />

                    {/* Modal */}
                    {/*TODO: Is there a way to place the modal inside a component? */}
                    <Modal show={this.state.showHide} centered>
                        <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                        <Modal.Title>Add activity</Modal.Title>
                        </Modal.Header>
                        <Form>
                            <Modal.Body>
                                <FormGroup controlId="formActivityName">
                                    <Form.Label>Activity Name:</Form.Label>
                                    <Form.Control type="string" placeholder="Enter activity name..." style={{width : "fit-content", display : "inline-block"}} onChange={e => this.setState({ activityName: e.target.value })}/>
                                    <CategoryDropdown data={this.categories} onSelect={(key, event) => this.onDropdownSelect(key, event)}/>
                                </FormGroup>
                                <FormGroup controlId="formDate">
                                    <Form.Label>Date:</Form.Label>
                                    <Form.Control type="date" onChange={e => this.setState({ activityDate: e.target.value })} />
                                </FormGroup>
                                <FormGroup controlId="formStartTime">
                                    <Form.Label>Start Time:</Form.Label>
                                    <Form.Control type="time" onChange={e => this.setState({ activityStartTime: e.target.value })} />
                                </FormGroup>
                                <FormGroup controlId="formEndTime">
                                    <Form.Label>End Time:</Form.Label>
                                    <Form.Control type="time" onChange={e => this.setState({ activityEndTime: e.target.value })} />
                                </FormGroup>
                            </Modal.Body>
                            <Modal.Footer>   
                                <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                                    Close
                                </Button>
                                <Button variant="primary" type="submit" onClick={() => this.submitHandler()}>
                                    Add Activity
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>
                </div>
            )
        }
    }
    
}

export default withRouter(ActivityComponent);
