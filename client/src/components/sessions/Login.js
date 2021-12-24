import React, { useState, useEffect } from "react";
import LoginForm from './LoginForm'
import LoginButton from './LoginButton'
import SignupButton from "./SignupButton";
import SignupForm from "./SignupForm";
import axios from "axios";

const Login = ({isLoggedIn}) => {
    const [renderLoginForm, setRenderLoginForm] = useState(true)
    const [renderSignupForm, setRenderSignupForm] = useState(false)
    const [currentLocation, setCurrentLocation] = useState([])


    useEffect(() => {
        axios
            .get("https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0")
            .then((res) => {
                setCurrentLocation(res.data)
            })
            .then()
    }, [isLoggedIn])

    return (
        <>
            { renderLoginForm ? 
                <LoginForm isLoggedIn={isLoggedIn} renderModal={setRenderLoginForm} currentLocation={currentLocation} /> 
                    : 
                <LoginButton renderModal={setRenderLoginForm} signupForm={setRenderSignupForm} />
            }
            { renderSignupForm ? 
                <SignupForm  
                    renderModal={setRenderSignupForm} 
                    isLoggedIn={isLoggedIn}
                /> 
                        : 
                <SignupButton renderModal={setRenderSignupForm} loginForm={setRenderLoginForm} />
            }

        </>
    )
    
}

export default Login