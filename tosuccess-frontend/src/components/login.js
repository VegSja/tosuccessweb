import React  from 'react';
import { GoogleLogin } from 'react-google-login';
import {Button} from 'react-bootstrap';

import { useHistory } from "react-router-dom";

//Using axios for http requests
const axios = require('axios');

const clientId = '767187782063-nm6b5i4a6uscq2d9sj8kcfv9taoeej5d.apps.googleusercontent.com';

var access_url = "http://vegsja.pythonanywhere.com/google/";

var response_data;

//Function for retrieving a backend token for access when making calls in the future
async function send_access_token(input_token) {
    const json = { token: input_token};
    const res = await axios.post(access_url, json, {
        'Content-Type': 'text/json'
    }).then((res) => res.data);

    response_data = res
    return res;
}


function Login(){
    
    let history = useHistory();

    const onSuccess = (res) => {
        send_access_token(res.tokenId).then(e => { //We wait for the HTTP request to finish before doing anything more...
            history.push({
                pathname: '/activities',
                state: 
                {
                    userid: res.profileObj.userid,
                    name: res.profileObj.givenName,
                    backend_access_token: response_data.access_token,
                    backend_refresh_token: response_data.refreash_token,
                }
            })
        });
  
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                render={renderProps => (
                    <Button onClick={renderProps.onClick} disabled={renderProps.disabled} variant="primary" size="lg">Start planning!</Button>
                )}

                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}

export default Login;