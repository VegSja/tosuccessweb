import React  from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '767187782063-nm6b5i4a6uscq2d9sj8kcfv9taoeej5d.apps.googleusercontent.com';

function Logout(){
    const onSuccess = (res) => {
        alert('Logout successfull');
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
}

export default Logout;