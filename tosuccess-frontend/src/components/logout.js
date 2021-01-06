import React  from 'react';
import { GoogleLogout } from 'react-google-login';
import { Button } from 'react-bootstrap';

import { useHistory } from "react-router-dom";

const axios = require('axios')

const logoutUrl = "http://vegsja.pythonanywhere.com/logout/"

const clientId = '767187782063-nm6b5i4a6uscq2d9sj8kcfv9taoeej5d.apps.googleusercontent.com';



async function send_logout_to_server(){
    const refresh_token = localStorage.getItem("refresh_token").toString()
    const token = localStorage.getItem("current_token").toString()
    const data = {
        refresh_token : refresh_token,
        access_token : token,
    }
    const res = await axios.post(logoutUrl, data, {
        'Content-Type' : 'text/json',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then((res) => {
        console.log("Successfully logged out of server")
        console.log(res)
    });
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