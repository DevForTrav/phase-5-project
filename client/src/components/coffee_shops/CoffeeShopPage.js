import React from "react";
import { useParams } from "react-router-dom";



const CoffeeShopPage = () => {
    const params = useParams()

    return (
        <>
            {console.log(params)}
            <p>Heller</p>
        </>
    )
}

export default CoffeeShopPage