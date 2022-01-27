import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import Button from "react-bootstrap/Button"
import { distanceToCoffeeShop } from "../../custom_modules/getDistanceToCoffeeShop";
import { getCoffeeShopImage } from "../../custom_modules/getCoffeeShopImage";
import CoffeeShopModal from "./CoffeeShopModal";
import AddToKafficoBtn from "./AddToKafficoBtn";
import { BsThreeDotsVertical } from "react-icons/bs"
import KafficoEllipsisFunctionality from "./KafficoEllipsisFunctionality";
import KafficoCardButtons from "./KafficoCardButtons";

const CoffeeShopCard = ( props ) => {
    const [distance, setDistance] = useState(null)
    const [img, setImg] = useState(null)
    const [renderCoffeeShopModal, setRenderCoffeeShopModal ] = useState(false)
    const [renderCardDropdown, setRenderCardDropdown ] = useState(false)

    const userCurrentLocation= `${props.currentUserLocation.lat},${props.currentUserLocation.lng}`
    const destination = props.coffeeShop.geometry ? `${props.coffeeShop.geometry.location.lat},${props.coffeeShop.geometry.location.lng}` : props.coffeeShop.coordinates
    const photoReference = props.coffeeShop.photos


    const displayModal = e => {
        console.log(props)
        if (e.target.classList.contains("open-modal")) {
            setRenderCoffeeShopModal(!renderCoffeeShopModal)
        }
    }

    

    const clickEllipsis = () => {
        setRenderCardDropdown(!renderCardDropdown)
    }
     
    useEffect(() => {
        getCoffeeShopImage(photoReference, setImg)
        distanceToCoffeeShop(userCurrentLocation, destination).then(res => setDistance(res))
    }, [userCurrentLocation, destination, photoReference, props])


    return (
        <>  
            <CoffeeShopModal renderCoffeeShopModal={renderCoffeeShopModal} setRenderCoffeeShopModal={setRenderCoffeeShopModal} coffeeShopData={props} />
            <Card  
                style={{ 
                    "width": "23rem", 
                    "marginTop": "3em",
                    "float": "left"
                }} 
                onClick={(e)=>{displayModal(e)}} 
                className="open-modal"
            >
                <Card.Img 
                    variant="top" 
                    src={img} 
                    style={{
                        height: "300px",
                        objectFit: "cover"
                    }}
                    className="open-modal"
                />
                <Card.Body>
                    <Card.Title 
                        style={{
                            display: "contents"
                        }} 
                        className="open-modal"
                    >
                        {props.coffeeShop.coffee_shop ? props.coffeeShop.coffee_shop.name : props.coffeeShop.name}
                    </Card.Title>
                    <Button 
                        variant="outline-secondary"
                        style={{
                                float: "right",
                                border: "none"
                        }} 
                        onClick={clickEllipsis}
                        
                    >
                            <BsThreeDotsVertical />
                    </Button>
                    
                    {renderCardDropdown ? <KafficoEllipsisFunctionality /> : null}

                </Card.Body>
                <ListGroup className="list-group-flush">
                    {distance ? <ListGroupItem>{`${distance.miles} away`}</ListGroupItem> : null}
                    {distance ? <ListGroupItem>{`${distance.duration} away`}</ListGroupItem> : null}
                    { props.coffeeShop.rating ? <ListGroupItem>{`Rating: ${props.coffeeShop.rating}`}</ListGroupItem> : <ListGroupItem>No Current Reviews</ListGroupItem>}
                </ListGroup>
                <Card.Body >
                    { props.parentComponent === "google" ? <AddToKafficoBtn {...props} /> : <KafficoCardButtons {...props} />}
                </Card.Body>
            </Card>
        </>
    )
}

export default CoffeeShopCard