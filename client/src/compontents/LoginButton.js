import React, { useState } from "react";
import axios from 'axios'

const LoginButton = () => {

    // const logout = () => {
    //     axios
    //         .delete("/logout")
    //         .then((res) => {
    //             console.log(res)
    //         }
    //     )
    // }
    const login = () => {
        axios
            .post("/login", {
                email: "travis@angry-fly.com",
                password: "Password123"
            })
            .then((res) => {
                console.log(res)
            }
        )
    }

    const handleClick = () => {
        login()
    }

    return (
        <button onClick={handleClick}>Login</button>
    )
}

export default LoginButton