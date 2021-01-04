import React, {Component} from 'react';

//Bootstrap imports
import {Nav, Navbar, Form, Button} from 'react-bootstrap';
import Logout from './logout';

//Routing imports
import { LinkContainer } from "react-router-bootstrap";


export default class NavBar extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <LinkContainer to ="/activities">
                    <Navbar.Brand href="#home">ToSuccess</Navbar.Brand>
                </LinkContainer>
                    <Nav className="mr-auto">
                    <LinkContainer to="/activities">
                        <Nav.Link>Activities</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/categories">
                        <Nav.Link>Categories</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/stats">
                        <Nav.Link>Stats</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/settings">
                        <Nav.Link>Settings</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Form inline>
                    <LinkContainer to="/landing">
                        <Logout />
                    </LinkContainer>
                </Form>
            </Navbar>
        )
    }
}