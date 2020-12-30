import React  from 'react';
import { GoogleLogout } from 'react-google-login';
import { Button } from 'react-bootstrap';

import { useHistory } from "react-router-dom";

const clientId = '767187782063-nm6b5i4a6uscq2d9sj8kcfv9taoeej5d.apps.googleusercontent.com';
//TODO: Send some sort of logout request to backend
function Logout(){
    let history = useHistory();
    const onSuccess = (res) => {
        history.push({
            pathname: '/landing' });
        console.log('Logout successfull');
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