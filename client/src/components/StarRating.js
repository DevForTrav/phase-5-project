import React, { useState } from "react";
import "./StarRating.module.css"
import {BsStar} from 'react-icons/bs'
import { Button, ButtonGroup } from "react-bootstrap";

const StarRating = ( props ) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    
    const clickStars = (index) => {
        setRating(index)
        props && ( props.setter(index) )
    }

    return (
        <ButtonGroup className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <Button
                        variant={index <= (hover || rating) ? "warning" : "light"}
                        id="star"
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => clickStars(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <BsStar className="star" />
                     </Button>
                );
            })}
         </ButtonGroup>
    );
  };


  export default StarRating