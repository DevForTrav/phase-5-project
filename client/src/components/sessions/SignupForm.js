import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const customModules = require('../../custom_modules/clickModalExit')

const SignupForm = (props) => {

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [age, setAge] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordConfirmation, setPasswordConfirmation] = useState(null)
    const [err, setErr] = useState([])

    console.log(props)

    const createAccount = () => {
        axios.post("/signup", {
            "first_name": firstName,
            "last_name": lastName,
            email,
            age,
            password,
            "password_confirmation": passwordConfirmation,
            "is_verified": false,
            "account_type": "user"
        }).then((res) => {
            props.isLoggedIn(true)
        }).catch((error) => console.log(error))

    }


    return (
        <Modal.Dialog>
            <Modal.Header closeButton onClick={(e) => customModules.clickModalExit(e, props)}>
                <Modal.Title>
                    Sign up
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group 
                        onChange={ (e) => setEmail(e.target.value) } 
                        className="mb-3" 
                        controlId="formBasicEmail"
                    >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group 
                        className="mb-3" 
                        onChange={ (e) => setFirstName(e.target.value) }    
                    >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" />
                    </Form.Group>
                    <Form.Group 
                        onChange={ (e) => setLastName(e.target.value) }
                        className="mb-3" 
                    >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>
                    <Form.Group 
                        onChange={ (e) => setAge(parseInt(e.target.value)) }
                        className="mb-3" 
                    >
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" placeholder="Enter age" />
                    </Form.Group>
                    <Form.Group 
                        onChange={ (e) => setPassword(e.target.value) }
                        className="mb-3" 
                    >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group 
                        onChange={ (e) => setPasswordConfirmation(e.target.value) }
                        className="mb-3" 
                    >
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={createAccount} variant="secondary" type="submit">
                    Submit
                </Button>
            </Modal.Footer>
            {<p>{err}</p>}
        </Modal.Dialog>
    )
}

export default SignupForm