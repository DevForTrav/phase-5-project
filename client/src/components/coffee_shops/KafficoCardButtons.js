import React from "react"
import { FiCoffee } from "react-icons/fi"
import { MdOutlineDirections } from "react-icons/md"
import  Button  from "react-bootstrap/Button"
import AddReview from "./card_buttons/AddReview"
import FavoriteButton from "./card_buttons/FavoriteButton"



const KafficoCardButtons = (props) => {

 return (
     <>
        <Button variant="outline-secondary">
            <FiCoffee />
        </Button>
        <Button variant="outline-secondary">
            <MdOutlineDirections />
        </Button>
        <FavoriteButton {...props} />
        <AddReview {...props} />
     </>
 )
}


export default KafficoCardButtons