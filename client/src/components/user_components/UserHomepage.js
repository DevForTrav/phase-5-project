import React, {useEffect, useState} from "react";
import RenderGoogleCoffeeShops from "../coffee_shops/RenderGoogleCoffeeShops";
import { Container } from "react-bootstrap";
import RenderKafficoCoffeeShops from "../coffee_shops/RenderKafficoCoffeeShops";
import SearchParamsForm from "../SearchParamsForm";
import { getCoffeeShopLocations } from "../../custom_modules/getCoffeeShopLocations";
import { getGoogleCoffeeShops } from "../../custom_modules/getGoogleCoffeeShops";
import { BsFillNodePlusFill } from "react-icons/bs";

const UserHomepage = (props) => {
    const [kafficoCoffeeShops, setKafficoCoffeeShops] = useState(null)
    const [googleCoffeeShops, setGoogleCoffeeShops] = useState(null)


    useEffect( () => {
        props.userLocation  && getCoffeeShopLocations(setKafficoCoffeeShops, props.userLocation)
        props.userLocation !== null && getGoogleCoffeeShops(setGoogleCoffeeShops, props.userLocation)
    }, [props.userLocation])

    
    return(
        <>
            {/* <Navigation user={props.user} isLoggedIn={props.setLoggedIn} /> */}
            <Container>
                <SearchParamsForm />
                <h1>Local Coffee Shops from Kaffico:</h1>
                {props.userLocation && kafficoCoffeeShops ? <RenderKafficoCoffeeShops parentComponent="kaffico" coffeeShops={kafficoCoffeeShops} user={props.user} userLocation={props.userLocation} /> : null}
                <h1>Local Coffee Shops from Google:</h1>
                {props.userLocation && googleCoffeeShops ? <RenderGoogleCoffeeShops parentComponent="google" userLocation={props.userLocation} coffeeShops={googleCoffeeShops} /> : null}
            </Container>
        </>
    )
}

export default UserHomepage