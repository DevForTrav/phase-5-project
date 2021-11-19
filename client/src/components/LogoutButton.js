import React, { useState } from "react";
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Button 
            variant="secondary" 
            onClick={handleClick}
        >
            Logout
        </Button>
    )
}

export default LogoutButton