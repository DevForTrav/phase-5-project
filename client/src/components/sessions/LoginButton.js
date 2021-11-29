import React, { useState } from "react";
import axios from 'axios'
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