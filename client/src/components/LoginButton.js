import React, { useState } from "react";
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginButton = ( props ) => {
    
    // const login = () => {
    //     axios
    //         .post("/login", {
    //             email: "travis@angry-fly.com",
    //             password: "Password123"
    //         })
    //         .then((res) => {
    //             console.log(res)
    //         }
    //     )
    // }

    const handleClick = () => {
        // login()
        props.displayLoginForm(!props.isClicked)
    }

    return (
        <Button 
            variant="secondary" 
            onClick={handleClick}
        >
            Login
        </Button>
    )
}

export default LoginButton