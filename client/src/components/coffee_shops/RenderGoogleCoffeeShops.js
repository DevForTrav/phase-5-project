import axios from "axios";
import React, { useEffect, useState } from "react";
import CoffeeShopCard from "./CoffeeShopCard";
import  Row from "react-bootstrap/Row";
import  Col from "react-bootstrap/Col";



const RenderGoogleCoffeeShops = ( props ) => {
    // const [ coffeeShops, setCoffeeShops ] = useState([])
    
    // useEffect(() => {

    //     axios.get(`/google_places?latitude=${props.userLocation.lat}&longitude=${props.userLocation.lng}`)
    //     .then((res) => {
    //         setCoffeeShops(res.data)
    //     })
    // }, [props.userLocation])
 
    const renderCoffeeShops = () => {
        console.log(props)
        return props.coffeeShops.map((coffeeShop, idx) => {
            return( 
                <Col key={idx} >
                    <CoffeeShopCard 
                        parentComponent={props.parentComponent} 
                        userLocation={props.userLocation} 
                        coffeeShop={coffeeShop} 
                        user={props.parentComponent === "kaffico" ? props.user : null }
                    />
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