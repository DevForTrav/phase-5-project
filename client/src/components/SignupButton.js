import React, { useState } from "react";
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const SignupButton = ( props ) => {

    // const signup = () => {
    //     axios
    //         .post("/signup", {
    //             "first_name": "Travis",
    //             "last_name": "Courtney",
    //             "email": "travis@angry-fly.com",
    //             "age": 26,
    //             "profile_image": "test",
	//             "account_type": "admin",
	//             "is_verified": true,
	//             "password": "Password123",
	//             "password_confirmation": "Password123"
    //         })
    //         .then((res) => {
    //             console.log(res)
    //         }
    //     )
    // }
    

    const handleClick = () => {
        props.displaySignupForm(!props.isClicked)
    }

    return (
        <Button 
            variant="secondary" 
            onClick={handleClick}
        >
            Sign Up
        </Button>
    )
}

export default SignupButton