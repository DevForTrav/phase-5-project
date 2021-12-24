import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginButton = ( props ) => {

    return (
        <Button 
            variant="secondary" 
            onClick={() => {
                props.renderModal(true)
                props.signupForm(false)
            }}
        >
            Login
        </Button>
    )
}

export default LoginButton