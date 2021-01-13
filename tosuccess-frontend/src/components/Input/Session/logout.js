import React  from 'react';
import { GoogleLogout } from 'react-google-login';
import { Button } from 'react-bootstrap';

import { useHistory } from "react-router-dom";

import API_Connection from "../../../other/API_connection"

const axios = require('axios')



const clientId = '767187782063-nm6b5i4a6uscq2d9sj8kcfv9taoeej5d.apps.googleusercontent.com';



async function send_logout_to_server(){
    const refresh_token = localStorage.getItem("refresh_token").toString()
    const token = localStorage.getItem("current_token").toString()
    var API = new API_Connection(token, refresh_token)
    API.post_logout()
    .catch((error) => {
        API.sendRefreshToken() //We will get an error because accesstoken is no longer valid. Retrieve a new one
        .then(() => {
            send_logout_to_server() //If this is successfull then try again
        })
        .catch(() => {
            alert("Error on logout:", error) //Alert error if not
        })
    })
}

//TODO: Send some sort of logout request to backend
function Logout(){
    let history = useHistory();
    const onSuccess = (res) => {
        send_logout_to_server()
        .then(() => {
        history.push({
            pathname: '/landing' });
        });
    };
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                render={renderProps => (
                    <Button onClick={renderProps.onClick} disabled={renderProps.disabled} variant="danger" size="lg">Log out</Button>
                )}
            />
        </div>
    );
}

export default Logout;