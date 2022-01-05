import React, {useEffect, useState} from "react";
import axios from "axios";
import Navigation from "../Navigation";
import LogoutButton from "../sessions/LogoutButton";
import UserWelcome from "./UserWelcome";
import RenderCoffeeShop from "../coffee_shops/RenderCoffeeShop";
import { Container } from "react-bootstrap";
import { getUserLocation } from '../../custom_modules/userLocation'


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
            <Navigation />
            {err ? <p>err</p> : null}
            <Container>
                {user ? <UserWelcome userName={user.first_name} /> : null}
                {location ? <RenderCoffeeShop location={location} /> : null}
                <LogoutButton isLoggedIn={isLoggedIn} />
            </Container>
        </>
    )
}

export default UserHomepage