import { React, Component } from "react"

import {Navbar, Container, NavbarBrand} from "react-bootstrap"

import "../style/general.css";

export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <Navbar>
                    <Container>
                        <p>Footer</p>
                    </Container>
                </Navbar>
            </div>
        )
    }
}