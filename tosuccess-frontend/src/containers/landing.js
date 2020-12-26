import React from "react";

import {Button} from 'react-bootstrap';
import Login from '../components/login.js';

import { LinkContainer } from "react-router-bootstrap";



import conquer from '../static/img/conquer.jpg';

import '../style/activity_page.css';
import '../style/landing.css';

var sectionStyle = {
    backgroundImage: 'url(' + conquer + ')'
}


export default function Landing(){
    return(
            <div className="page-contain" style={sectionStyle}>
                <div className="content-left">
                    <h1 class="landingPage">Achieve it!</h1>
                    <p> The daily planner which structures your day in a revolutinary way</p>
                    <LinkContainer to="/activities">
                        <Login />
                    </LinkContainer>
                </div>
            </div>
    );
}