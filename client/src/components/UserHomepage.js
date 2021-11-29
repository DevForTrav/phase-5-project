import React, {useEffect, useState} from "react";
import axios from "axios";
import Navigation from "./Navigation";
import LogoutButton from "./sessions/LogoutButton";


const UserHomepage = ({isLoggedIn}) => {
    const [userId, setUserId] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios
            .get('/me')
            .then(  (res) => {
                setUserId(res)
                isLoggedIn(true)
            }).catch(error => {
                setError(error)
                isLoggedIn(false)
            })
    }, [])

    if (error) return `${error}`
    // if (userId) return `${userId}`

    return(
        <div>
            <Navigation />
            <LogoutButton isLoggedIn={isLoggedIn} />
        </div>
    )
}

export default UserHomepage