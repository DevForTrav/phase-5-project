import React from "react";
import { NavDropdown } from "react-bootstrap";
import LogoutButton from "./sessions/LogoutButton";


const ProfileDropdown = ( props ) => {
    return (
        <NavDropdown title={props.user.first_name}  menuVariant="dark" id="nav-dropdown" align={{sm: 'end'}}>
            <NavDropdown.Item href="/profile" eventKey="4.1">Profile</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Interactions</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <LogoutButton isLoggedIn={props.isLoggedIn} />
        </NavDropdown>
    )
}

export default ProfileDropdown