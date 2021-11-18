import React, { useState } from "react";
import axios from 'axios'

const LogoutButton = () => {

    const logout = () => {
        axios
            .delete("/logout")
            .then((res) => {
                console.log(res)
            }
        )
    }

    const handleClick = () => {
        logout()
    }

    return (
        <button onClick={handleClick}>Logout</button>
    )
}

export default LogoutButton