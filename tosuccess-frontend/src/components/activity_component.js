import ActivityTable from '../components/activityTable';
import AddActivityButton from '../components/add_activity_button';

import {Button, Modal, Form, Spinner} from 'react-bootstrap';

import {React, Component} from 'react';
import { FormGroup } from '@material-ui/core';

//Routing
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

//Non-react classes
import API_Connection from "../other/API_connection"
import DateHandler from "../other/dateHandler"
import DatePicker from "./date_picker"

//TODO: Change format of date so that backends accepts
class ActivityComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            activityName : "",
            activityDate : "",
            activityStartTime : "",
            activityEndTime : "",
            showHide : false,
            loading_date : true,

            backend_access_token: null,
            date_to_view : new Date(),
            dayNumber_to_view : null,
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

        this.api_connection = new API_Connection(this.state.backend_access_token); //We still keep this object and pass it into the table. Still need it to post
        this.dateHandler = new DateHandler();

        this.api_connection.get_current_date().then((response) => {
            this.currentdate = this.api_connection.date.date;
            this.currentDayNumber = this.api_connection.date.daynumber;
            this.setState({ date_to_view : this.currentdate, dayNumber_to_view : this.currentDayNumber, loading_date : false })
        });
    }

    //Handle input in fab
    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    submitHandler(){
        //This is where you handle the input given. The previous functions should have changed the states to reflect the value inputed. Just use this.state.activityName for instance
        var date = this.dateHandler.convertDateToDDMMMMYYYY(this.state.activityDate);
        var dayNumber = this.dateHandler.convertDateToDayNumber(this.state.activityDate);
        var start_time = this.dateHandler.convertTimeToMinutes(this.state.activityStartTime);
        var end_time = this.dateHandler.convertTimeToMinutes(this.state.activityEndTime);
        this.api_connection.post_activity(this.state.activityName, start_time, end_time, dayNumber, date);
        //this.handleModalShowHide();
    }

    render(){
        if (this.state.loading_date){
            return(
                <div>
                    <h1>Here are your activities for the next 3 days!</h1>
                </div>
            )
        }
        else{
            console.log("Sending date to table: ", this.state.dayNumber_to_view)
            return(
                <div>
                    <h1>Here are your activities for the next 3 days!</h1>
                    <DatePicker value={this.state.date_to_view} label="Date:" onChange={e=> this.setState({ date_to_view : e.target.value, dayNumber_to_view : this.dateHandler.convertDateToDayNumber(e.target.value) })}/>
                    {/* The rest of the page */}
                    <ActivityTable backendAccessToken={this.state.backend_access_token} api_connection={this.api_connection} day_number_to_view={this.state.dayNumber_to_view} />
                    <AddActivityButton handleClick={() => this.handleModalShowHide()} />

                    {/* Modal */}
                    {/*TODO: Is there a way to place the modal inside a component? */}
                    <Modal show={this.state.showHide} centered>
                        <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                        <Modal.Title>Add activity</Modal.Title>
                        </Modal.Header>
                        <Form onSubmit={this.submitHandler}>
                            <Modal.Body>
                                <FormGroup controlId="formActivityName">
                                    <Form.Label>Activity Name:</Form.Label>
                                    <Form.Control type="string" placeholder="Enter activity name..." onChange={e => this.setState({ activityName: e.target.value })}/>
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
