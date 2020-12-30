//This class sends a GET request to the server to check if the user still is authenticated.
import { React, Component } from "react";

import { Redirect, useHistory } from "react-router-dom";

async function Backend_Authorizer(backend_access_token){
    const axios = require('axios');
    var url = "http://vegsja.pythonanywhere.com/activities/";
    const token = backend_access_token
    console.log("Testing access to backend.... Token: ", token)


    const res = await axios.get(url, {
        headers: {
            "Authorization": `Bearer ${token}` 
        }
    })
    .then((res) => {
        console.log("Connection to backend still authorized");
        return true
    })
    .catch((error) => {
        console.log("Not authorized for backend. Redirecting...");
        return false
    });

    return(<div></div>)
}

export default Backend_Authorizer

