import React from "react";

import {Button} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

import conquer from '../static/img/conquer.jpg';

import '../style/activity_page.css';
import '../style/login_page.css';

var sectionStyle = {
    backgroundImage: 'url(' + conquer + ')'
}


export default function Login(){
    return(
            <div className="page-contain" style={sectionStyle}>
                <div className="content-left">
                    <h1 class="landingPage"> Achieve it!</h1>
                    <p> The daily planner which structures your day in a revolutinary way</p>
                    <LinkContainer to="/activities">
                        <Button variant="primary" size="lg">Start planning!</Button>
                    </LinkContainer>
                </div>
            </div>
    );
}