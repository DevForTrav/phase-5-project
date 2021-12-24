import React from "react"
import SignupButton from "./SignupButton"
import SignupForm from "./SignupForm"

const Signup = (props) => {

    return (
        <>
            { props.renderSignupForm ? <SignupForm renderModal={props.setRenderSignupForm} /> : <SignupButton renderModal={props.setRenderSignupForm} />}
        </>
    )
}

export default Signup