import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import Button from "react-bootstrap/Button"
import { distanceToCoffeeShop } from "../../custom_modules/getDistanceToCoffeeShop";
import { getCoffeeShopImage } from "../../custom_modules/getCoffeeShopImage";

const CoffeeShopCard = ( props ) => {
    const [distance, setDistance] = useState(null)
    const [img, setImg] = useState(null)
    const [renderCoffeeShopModal, setRenderCoffeeShopModal ] = useState(false)

    const userCurrentLocation= `${props.currentUserLocation.lat},${props.currentUserLocation.lng}`
    const destination = `${props.coffeeShop.geometry.location.lat},${props.coffeeShop.geometry.location.lng}`
    const photoReference = props.coffeeShop.photos
    
    useEffect(() => {
        getCoffeeShopImage(photoReference, setImg)
        distanceToCoffeeShop(userCurrentLocation, destination).then(res => setDistance(res))
    }, [userCurrentLocation, destination, photoReference])


    return (
        <>
            
        </>
        <Card  style={{ width: '18rem' }} onClick={setRenderCoffeeShopModal(!renderCoffeeShopModal)} >
            {/* <Card.Img variant="top" src={img} /> */}
            <Card.Body>
                <Card.Title>{props.coffeeShop.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {distance ? <ListGroupItem>{`${distance.miles} away`}</ListGroupItem> : null}
                {distance ? <ListGroupItem>{`${distance.duration} away`}</ListGroupItem> : null}
                { props.coffeeShop.rating !== 0 ? <ListGroupItem>{`Rating: ${props.coffeeShop.rating}`}</ListGroupItem> : null}
            </ListGroup>
            <Card.Body>
                <Button variant="secondary">Add To Kaffico</Button>
                <Button variant="outline-secondary">Directions</Button>
            </Card.Body>
        </Card>
    )
}

export default CoffeeShopCard