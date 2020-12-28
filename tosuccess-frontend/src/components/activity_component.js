import ActivityTable from '../components/activityTable';
import AddActivityButton from '../components/add_activity_button';

import {Button, Modal, Form, Spinner} from 'react-bootstrap';

import {React, Component} from 'react';
import { FormGroup } from '@material-ui/core';

//Routing
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

//Non-react classes
import test_access_to_backend from "../other/sessionHandler"
import API_Connection from "../other/API_connection"

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
            loading : true,
        }
        if ((this.props.location.state) == undefined) {
            this.props.history.push('/landing');
            return
        }
        test_access_to_backend(this.props.location.state.backend_access_token);
        const api_connection = new API_Connection(this.props.location.state.backend_access_token);

        //API connection data retrieval
        api_connection.get_current_date().then((response) => {
            this.currentdate = api_connection.date;
            console.log(this.currentdate);
        });

        api_connection.get_activities().then((response) => {
            this.activities = api_connection.activities;
            console.log(this.activities);
            this.setState({ loading: false });
        });
    }
    //Handle input in fab
    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    submitHandler(){
        //This is where you handle the input given. The previous functions should have changed the states to reflect the value inputed. Just use this.state.activityName for instance
        alert("Name: " + this.state.activityName +
                "\n Date:" + this.state.activityDate +
                "\n Start Time: " + this.state.activityStartTime +
                "\n End Time: " + this.state.activityEndTime);
        this.handleModalShowHide();
    }

    render(){
        return(
            <div>
                <h1>Hello NAME, here is your activities!</h1>
                {/* The rest of the page */}
                {this.state.loading ? <Spinner animation="grow" size="lg" /> :  <ActivityTable activitiesson={this.activities} /> }
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

export default withRouter(ActivityComponent);
