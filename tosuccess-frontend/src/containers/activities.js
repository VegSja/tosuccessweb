import React from "react";

import ActivityComponent from '../components/activity_component';

import '../style/activity_page.css';


export default function Activities(){

    //Had to call this as a component to manage the modal. Might be a fix but can't be bothered to figure out now
    return(
        <div>
            <ActivityComponent />
        </div>
    );
}