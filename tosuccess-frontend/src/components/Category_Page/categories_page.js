import {React, Component} from "react";
import { Redirect } from 'react-router'

import AddActivityButton from "../Input/add_activity_button"
import ColorPicker from "../Modals/colorPicker"
import CategoriesTable from "./categories_table"

import LoadingPage from "../../containers/Loading/LoadingPage"

import {Button, Modal, Form, FormGroup, Alert} from 'react-bootstrap';

import API_Connection from '../../other/API_connection'


export default class CategoriesPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            showHide : false,

            category_name : null,
            category_color : "#FFFFFFF",

            backend_access_token : null,
            backend_refresh_token : null,

            error_on_server : false,
            error_message_from_server : null,

            categories : null,

            loading : true,
        }
        var routeState = localStorage.getItem("routeState");
        if(routeState) routeState = JSON.parse(routeState);
        this.state.backend_access_token = routeState.backend_access_token
        this.state.backend_refresh_token = routeState.backend_refresh_token
        this.API = new API_Connection(this.state.backend_access_token, this.state.backend_refresh_token)

        //Bind "this" keyword for use in onClick
        this.submitHandler = this.submitHandler.bind(this)
    }


    componentDidMount(){
        this.sendGetRequest()
    }

    sendGetRequest(){
        this.API.get_categories()
        .then((response) => {
            //console.log("Get was successfull changing this.categories")
            this.state.categories = this.API.categories;
            this.setState({ loading: false });
        })
        .catch((response) => {
            this.API.sendRefreshToken() //Send refresh token
            .then((response) => {
                this.sendGetRequest() //If successfully retrieved token. Try again
            })
            .catch((error) => {
                this.handleServerError(error.request.statusText) //If not display error
            })
        })
    }

    
    handleServerError(error){
        this.setState({ error_on_server : true, error_message_from_server : error })
    }

    handleModalShowHide(){
        this.API.sendRefreshToken()
        this.setState({ showHide : !this.state.showHide })
    }

    onColorSelect(color, event){
        this.setState({ category_color : color.hex })
    }

    submitHandler = event => {
        this.API.post_category(this.state.category_name, this.state.category_color)
        .then((response) => {
            console.log("Success:", response)
            this.setState({ loading : true })
            this.handleModalShowHide()
            this.sendGetRequest()
            return
        })
        .catch(() => {
            this.API.sendRefreshToken() //If not successfull, send refresh token and get new access token
            .then(() => {
                this.submitHandler()
                return
            })
            .catch(() => {
                return
            })
        })
        event.preventDefault() //Leave this to hinder reload, which inturn will fix post on start 
    }

    render(){
        if(this.state.loading){
            if(this.state.error_on_server){
                if(this.state.error_message_from_server === "Unauthorized"){
                    return(<div><Redirect to="/landing" /></div>)
                }
                else{
                    return(
                        <Alert variant="danger">
                            Server error: {this.state.error_message}
                        </Alert>)
                }
            }
            return(<LoadingPage />)
        }
        return(
            <div>
                <h1>Categories</h1>
                <CategoriesTable backendAccessToken={this.state.backend_access_token} api_connection={this.API} categories={this.state.categories}/>
                <AddActivityButton handleClick={() => this.handleModalShowHide()} />

                            {/* Modal */}
                            {/*TODO: Is there a way to place the modal inside a component? */}
                            <Modal show={this.state.showHide} centered>
                                <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                                <Modal.Title>Add category</Modal.Title>
                                </Modal.Header>
                                <Form>
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
                                        <Button variant="primary" type="submit" onClick={this.submitHandler}>
                                            Add Category
                                        </Button>
                                    </Modal.Footer>
                                </Form>
                            </Modal>
                </div>
    );}
}