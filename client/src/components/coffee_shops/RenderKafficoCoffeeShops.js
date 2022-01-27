import axios from "axios";
import React, { useEffect, useState } from "react";
 import CoffeeShopCard from "./CoffeeShopCard";
import  Row from "react-bootstrap/Row";
import  Col from "react-bootstrap/Col";



const RenderKafficoCoffeeShops = ( props ) => {
    const [ coffeeShops, setCoffeeShops ] = useState([])
    
    useEffect(() => {
        const location = props.location
        axios.get(`/locations`)
        .then((res) => {
            setCoffeeShops(res.data)
        })
    }, [props.location])
 
    const renderCoffeeShops = () => {
        return coffeeShops.map((coffeeShop, idx) => {
            return( 
                <Col key={idx} >
                    <CoffeeShopCard  user={props.user} parentComponent={props.parentComponent} currentUserLocation={props.location} coffeeShop={coffeeShop} />
                </Col>
            )
        })

    };

    return (
        <>
            <Row style={{marginBottom: "5em"}}>
                {coffeeShops? renderCoffeeShops() : null}
            </Row>
        </> 
    )

}

export default RenderKafficoCoffeeShops