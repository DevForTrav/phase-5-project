import React from "react";
import { Nav } from "react-bootstrap";

const Navigation = () => {

    return (
        <Nav className="justify-content-end" variant="tabs" defaultActiveKey="/home" bg="dark" >
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
    )
}

export default Navigation