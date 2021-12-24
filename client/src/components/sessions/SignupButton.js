import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const SignupButton = ( props ) => {

    return (
        <Button 
            variant="secondary" 
            onClick={ () => {
                props.renderModal(true)
                props.loginForm(false)
            }}
        >
            Sign Up
        </Button>
    )
}

export default SignupButton