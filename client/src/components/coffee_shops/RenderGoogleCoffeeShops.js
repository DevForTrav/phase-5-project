import axios from "axios";
import React, { useEffect, useState } from "react";
import CoffeeShopCard from "./CoffeeShopCard";
import  Row from "react-bootstrap/Row";
import  Col from "react-bootstrap/Col";



const RenderGoogleCoffeeShops = ( props ) => {
    const [ coffeeShops, setCoffeeShops ] = useState([])
    
    useEffect(() => {
        const location = props.location
        axios.get(`/google_places?latitude=${location.lat}&longitude=${location.lng}`)
        .then((res) => {
            setCoffeeShops(res.data)
        })
    }, [props.location])
 
    const renderCoffeeShops = () => {
        return coffeeShops.map((coffeeShop, idx) => {
            return( 
                <Col key={idx} >
                    <CoffeeShopCard parentComponent={props.parentComponent} currentUserLocation={props.location} coffeeShop={coffeeShop} />
                </Col>
            )
        })

    };

    return (
        <Row>
            {renderCoffeeShops()}
        </Row>
    )

}

export default RenderGoogleCoffeeShops