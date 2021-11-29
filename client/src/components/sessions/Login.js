import React, { useState } from "react";
import LoginForm from './LoginForm'
import LoginButton from './LoginButton'
import SignupButton from "./SignupButton";
import SignupForm from "./SignupForm";

const Login = ({isLoggedIn}) => {
    const [renderLoginForm, setRenderLoginForm] = useState(true)
    const [renderSignupForm, setRenderSignupForm] = useState(false)

    return (
        <>
            { renderLoginForm ? 
                <LoginForm isLoggedIn={isLoggedIn} renderModal={setRenderLoginForm}  /> 
                    : 
                <LoginButton renderModal={setRenderLoginForm} signupForm={setRenderSignupForm} />
            }
            { renderSignupForm ? 
                <SignupForm  renderModal={setRenderSignupForm} /> 
                    : 
                <SignupButton renderModal={setRenderSignupForm} loginForm={setRenderLoginForm} />
            }

        </>
    )
    
}

export default Login