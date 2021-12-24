import axios from "axios";
import React, { useEffect, useState } from "react";
import CoffeeShopCard from "./CoffeeShopCard";
import  Row from "react-bootstrap/Row";
import  Col from "react-bootstrap/Col";



const RenderCoffeeShop = ( props ) => {
    const [ coffeeShops, setCoffeeShops ] = useState([])
    console.log(props)
    useEffect(() => {
        axios.get(`/google_places`,{
            
        })
        .then((res) => {
            setCoffeeShops(res.data)
        })
    }, [])
 
    const renderCoffeeShops = () => {
        return coffeeShops.map((coffeeShop, idx) => {
            return( 
                <Col >
                    <CoffeeShopCard   key={idx} coffeeShop={coffeeShop} />
                </Col>
            )
        })

    };

    

    const location = {
        "country_code":"US", 
        "country_name":"United States", 
        "city":"Asheville", 
        "postal":"28805", 
        "latitude":35.6004, 
        "longitude":-82.4918, 
        "IPv4":"66.169.21.35", 
        "state":"North Carolina"
    }

    return (
        <Row>
            {renderCoffeeShops()}
        </Row>
    )

}

export default RenderCoffeeShop