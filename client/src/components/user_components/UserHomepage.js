import React, {useEffect, useState} from "react";
import axios from "axios";
import Navigation from "../Navigation";
import LogoutButton from "../sessions/LogoutButton";
import UserWelcome from "./UserWelcome";
import RenderCoffeeShop from "../coffee_shops/RenderCoffeeShop";
import { Container } from "react-bootstrap";


const UserHomepage = ({isLoggedIn}) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios
            .get('/me')
            .then(  (res) => {
                setUser(res.data)
                isLoggedIn(true)
            }).catch(error => {
                setError(error)
                isLoggedIn(false)
            })
    }, [isLoggedIn])

    console.log(user)
    // if (error) return `${error}`

    return(
        <>
            <Navigation />
            <Container>
                {user ? <UserWelcome userName={user.first_name} /> : null}
                {console.log(user)}
                {user ? <RenderCoffeeShop location={user.location} /> : null}
                <LogoutButton isLoggedIn={isLoggedIn} />
            </Container>
        </>
    )
}

export default UserHomepage