import React, {useState} from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import {FaSearchLocation} from 'react-icons/fa'

const SearchParamsForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(true);

  return (
    <>
        <Button 
            variant="outline-secondary" 
            onClick={toggleShow} 
            className="me-2"
            style={{
                display: "block",
                float: "left",
                marginTop: "1em"
            }}
        >
            <FaSearchLocation />
         </Button>
        <Offcanvas style={{top: "6em"}} backdrop={false} show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
        </Offcanvas>
    </>
  );
}

export default SearchParamsForm