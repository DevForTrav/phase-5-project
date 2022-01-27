import React, {useEffect, useState} from "react";
import axios from "axios";
import Navigation from "../Navigation";
import RenderGoogleCoffeeShops from "../coffee_shops/RenderGoogleCoffeeShops";
import { Container } from "react-bootstrap";
import { getUserLocation } from '../../custom_modules/userLocation'
import RenderKafficoCoffeeShops from "../coffee_shops/RenderKafficoCoffeeShops";
import SearchParamsForm from "../SearchParamsForm";


const UserHomepage = ({isLoggedIn}) => {
    const [user, setUser] = useState(null)
    const [location, setLocation] = useState(null)
    const [err, setErr] = useState(null)

    useEffect(() => {
        getUserLocation(setLocation)
        axios
            .get('/me')
            .then((res) => {
                setUser(res.data) 
                isLoggedIn(true)
            })
            .catch(error => {
                setErr(error)
                isLoggedIn(false)
            })
    }, [isLoggedIn])

    
    return(
        <>
            <Navigation user={user} isLoggedIn={isLoggedIn} />
            {err ? <p>err</p> : null}
            <Container>
                <SearchParamsForm />
                <h1>Local Coffee Shops from Kaffico:</h1>
                {location ? <RenderKafficoCoffeeShops parentComponent="kaffico" user={user} location={location} /> : null}
                <h1>Local Coffee Shops from Google:</h1>
                {/* {location ? <RenderGoogleCoffeeShops parentComponent="google" location={location} /> : null} */}
            </Container>
        </>
    )
}

export default UserHomepage