import React, { useState } from "react";
import LoginForm from './LoginForm'
import LoginButton from './LoginButton'

const Login = () => {
    const [isClicked, setIsClicked ] = useState(true)

    const displayLoginForm = arg => {
        setIsClicked(arg)
    }

    return (
        <>
            { isClicked ? <LoginForm displayForm={displayLoginForm} isClicked={isClicked}  /> : <LoginButton displayLoginForm={displayLoginForm}  isClicked={isClicked} />}
        </>
    )
    
}

export default Login