import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navigation = () => {

    return (
        <Navbar bg="dark" variant="dark" >

            <Container >
            <Navbar.Brand>
                Kaffico
            </Navbar.Brand>
            <Nav defaultActiveKey="/home" className="justify-content-end" >
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">NavLink</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">
                        Meep
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation