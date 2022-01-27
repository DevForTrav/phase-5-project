import React, { useState, useEffect } from "react"
import Modal from 'react-bootstrap/modal'
import Alert from 'react-bootstrap/alert'
import Button from 'react-bootstrap/button'



const ReviewAlert = ( props ) => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        setTimeout(()=> {handleClose()}, 2000)
    })

    return (
        
        <Alert 
            show={show}
            dismissible 
            onClose={() => {
                handleClose()
            }} 
            variant={props.variant}
        >
            <Alert.Heading>We appreciate you!</Alert.Heading>
            <hr />
            <p>Hey, thank you for submitting a review. By submitting accurate reviews it allows our community to thrive.</p>
        </Alert>
    )
}

export default ReviewAlert