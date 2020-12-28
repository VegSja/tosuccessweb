//This class sends a GET request to the server to check if the user still is authenticated.

import { Redirect } from "react-router-dom";



async function test_access_to_backend(input_token){
    const axios = require('axios');
    var url = "http://vegsja.pythonanywhere.com/activities/";
    const token = input_token;
    console.log("Testing access to backend.... Token: ", token)


    const res = await axios.get(url, {
        headers: {
            "Authorization": `Bearer ${token}` 
        }
    })
    .then((res) => {
        console.log("Connection to backend still authorized");
    })
    .catch((error) => {
        console.error(error);
        return <Redirect to="/landing" />
    });
}

export default test_access_to_backend
