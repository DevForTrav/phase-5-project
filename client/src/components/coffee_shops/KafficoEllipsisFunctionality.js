import React from "react"
import Dropdown from "react-bootstrap/Dropdown"

const KafficoEllipsisFunctionality = () => {
    return(
        <Dropdown  align={{sm: 'end'}}>
            <Dropdown.Menu variant="dark" show>
                <Dropdown.Item eventKey="1">Remove from Kaffico</Dropdown.Item>
                <Dropdown.Item eventKey="2">Update Coffee Shop</Dropdown.Item>
                <Dropdown.Item eventKey="3">Flag Coffee Shop</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}


export default KafficoEllipsisFunctionality