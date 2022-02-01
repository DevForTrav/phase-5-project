import axios from "axios";
import React, { useEffect, useState } from "react";
 import CoffeeShopCard from "./CoffeeShopCard";
import  Row from "react-bootstrap/Row";
import  Col from "react-bootstrap/Col";
// import { getCoffeeShopLocations} from "../../custom_modules/getCoffeeShopLocations";



const RenderKafficoCoffeeShops = ( props ) => {
    // const [ coffeeShops, setCoffeeShops ] = useState([])
    
    // useEffect(() => {
    //     getCoffeeShopLocations(setCoffeeShops, props.userLocation)
    // }, [])
 
    const renderCoffeeShops = () => {
        return props.coffeeShops.map((coffeeShop, idx) => {
            return( 
                <Col key={idx} >
                    <CoffeeShopCard  user={props.user} parentComponent={props.parentComponent} userLocation={props.userLocation} coffeeShop={coffeeShop} />
                </Col>
            )
        })

    };

    return (
        <>
            <Row style={{marginBottom: "5em"}}>
                {props.coffeeShops? renderCoffeeShops() : null}
            </Row>
        </> 
    )

}

export default RenderKafficoCoffeeShops