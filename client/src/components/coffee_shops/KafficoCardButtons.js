import React from "react"
import { FiCoffee } from "react-icons/fi"
import { MdOutlineDirections } from "react-icons/md"
import  Button  from "react-bootstrap/Button"
import AddReview from "./card_buttons/AddReview"
import FavoriteButton from "./card_buttons/FavoriteButton"
import { Link } from "react-router-dom"



const KafficoCardButtons = (props) => {

 return (
     <>
        <Link to={`/kaffico/${props.coffeeShop.coffee_shop.id}`} >
            <Button variant="outline-secondary">
                <FiCoffee />
            </Button>
        </Link>
        <Button 
            variant="outline-secondary"
            href="https://www.google.com/maps"
            target="_blank"
        >
            <MdOutlineDirections />
        </Button>
        <FavoriteButton {...props} />
        <AddReview {...props} />
     </>
 )
}


export default KafficoCardButtons