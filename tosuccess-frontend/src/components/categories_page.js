import {React, Component} from "react";

import AddActivityButton from "../components/add_activity_button"
import ColorPicker from "../components/colorPicker"

import {Button, Modal, Form, FormGroup} from 'react-bootstrap';

import API_Connection from '../other/API_connection'


export default class CategoriesPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            showHide : false,

            category_name : null,
            category_color : "#FFFFFFF",

            backend_access_token : null,
        }
        var routeState = localStorage.getItem("routeState");
        if(routeState) routeState = JSON.parse(routeState);
        this.state.backend_access_token = routeState.backend_access_token
        this.API = new API_Connection(this.state.backend_access_token)
    }

    handleModalShowHide(){
        this.setState({ showHide : !this.state.showHide })
    }

    onColorSelect(color, event){
        console.log("Color: ", color.hex)
        this.setState({ category_color : color.hex })
    }

    submitHandler(){
        this.API.post_category(this.state.category_name, this.state.category_color)
    }

    render(){
        return(
            <div>
                <h1>Categories</h1>

                <AddActivityButton handleClick={() => this.handleModalShowHide()} />

                            {/* Modal */}
                            {/*TODO: Is there a way to place the modal inside a component? */}
                            <Modal show={this.state.showHide} centered>
                                <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                                <Modal.Title>Add category</Modal.Title>
                                </Modal.Header>
                                <Form onSubmit={this.submitHandler}>
                                    <Modal.Body>
                                        <FormGroup controlId="formCategoryName">
                                            <Form.Label>Category name:</Form.Label>
                                            <Form.Control type="string" placeholder="Enter category name..." onChange={e => this.setState({ category_name: e.target.value })}/>
                                        </FormGroup>
                                        <FormGroup controlId="formColor">
                                            <Form.Label>Category Color:</Form.Label>
                                            <ColorPicker color={'#FFFFFF'} onChange={(c,e) => this.onColorSelect(c,e)} />
                                        </FormGroup>
                                    </Modal.Body>
                                    <Modal.Footer>   
                                        <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                                            Close
                                        </Button>
                                        <Button variant="primary" type="submit" onClick={() => this.submitHandler()}>
                                            Add Category
                                        </Button>
                                    </Modal.Footer>
                                </Form>
                            </Modal>
                </div>
    );}
}