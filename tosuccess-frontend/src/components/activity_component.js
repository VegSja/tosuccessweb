import ActivityTable from '../components/activityTable';
import AddActivityButton from '../components/add_activity_button';
import DatePicker from "../components/datepicker";
import TimePickerBootstrap from "../components/timepicker";

import {Button, Modal, Form} from 'react-bootstrap';

import {React, Component} from 'react';
import { FormGroup } from '@material-ui/core';

//Routing
import { withRouter } from "react-router";
import PropTypes from "prop-types";

//TODO: Change format of date so that backends accepts

class ActivityComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            activityName : "",
            activityDate : "",
            activityStartTime : "",
            activityEndTime : "",
            showHide : false
        }
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
        console.log("Props: ", this.props.location)
        return(
            <div>
                <h1>Hello {this.props.location.state.name}, here is your activities!</h1>
                {/* The rest of the page */}
                <ActivityTable />
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
