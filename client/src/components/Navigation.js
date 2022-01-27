import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import ProfileDropdown from "./ProfileDropdown";

const Navigation = ( props ) => {
    return (
        <Navbar bg="dark" variant="dark" style={{"padding": "1.5em"}} >
                <Navbar.Brand style={{"marginLeft": "3em"}} >
                    Kaffico
                </Navbar.Brand>
                <Nav defaultActiveKey="/home" className="justify-content-end flex-grow-1 pe-3" >
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/user_favorites">Favorites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    { props.user ? <ProfileDropdown user={props.user} isLoggedIn={props.isLoggedIn} /> : null}
                </Nav>
        </Navbar>
    )
}

export default Navigation