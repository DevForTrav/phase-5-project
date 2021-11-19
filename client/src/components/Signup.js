import React, { useState } from "react"
import SignupButton from "./SignupButton"
import SignupForm from "./SignupForm"

const Signup = () => {
    const [ isClicked, setIsClicked ] = useState(false)
    // const isClicked

    const displaySignupForm = (arg) => {
        setIsClicked(arg)
    }

    return (
        <>
            { isClicked ? <SignupForm displayForm={displaySignupForm} isClicked={isClicked} /> : <SignupButton displaySignupForm={displaySignupForm} isClicked={isClicked} />}
        </>
    )
}

export default Signup