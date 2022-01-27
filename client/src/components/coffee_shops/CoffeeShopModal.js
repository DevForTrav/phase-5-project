import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const CoffeeShopModal = ( props ) => {

    const handleClose = () => props.setRenderCoffeeShopModal(false);


    return(
        <Modal show={props.renderCoffeeShopModal} onHide={handleClose} >
            {/* {console.log(props)} */}
            <Modal.Header closeButton>
                <Modal.Title>{props.coffeeShopData.coffeeShop.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button> */}
            </Modal.Footer>
        </Modal>
    )
}

export default CoffeeShopModal