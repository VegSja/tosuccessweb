import React  from 'react';
import { GoogleLogin } from 'react-google-login';
import {Button} from 'react-bootstrap';

import { useHistory } from "react-router-dom";

const clientId = '767187782063-nm6b5i4a6uscq2d9sj8kcfv9taoeej5d.apps.googleusercontent.com';

function Login(){
    
    let history = useHistory();

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
        history.push({
            pathname: '/activities',
            state: 
            {
                userid: res.profileObj.userid,
                name: res.profileObj.givenName,
            }
        })
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