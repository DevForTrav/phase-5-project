import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { createCoffeeShop } from '../../custom_modules/createCoffeeShop'
import { createLocation } from '../../custom_modules/createLocation'

const AddToKafficoBtn = ( props ) => {

    const [coffeeShop, setCoffeeShop ] = useState(null)

    const addToKaffico = () => {
        createCoffeeShop(props.coffeeShop)
        .then(  res => {
            createLocation(props, res).then(
                res => {
                    setCoffeeShop(res)
                }
            )
        })
    }

    return (
        <Button variant='secondary' onClick={addToKaffico}>
            Add to Kaffico
        </Button>

    )
}


export default AddToKafficoBtn