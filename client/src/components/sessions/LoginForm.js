import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import exitModal from '../../custom_modules/clickModalExit'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = ( props ) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)


    const handleClick = () => {
            axios.post("/login", {
                    email,
                    password
                })
                .then((res) => {
                    props.renderModal(false)
                    props.isLoggedIn(true)
                }
            )
    }

    return (
        <Modal.Dialog>
            <Modal.Header closeButton onClick={(e) => exitModal.clickModalExit(e, props)} > 
                <Modal.Title>
                    Log in
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={ (e)=>{setPassword(e.target.value)} } type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me?" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" type="submit" onClick={handleClick}>
                    Sign in
                </Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default LoginForm