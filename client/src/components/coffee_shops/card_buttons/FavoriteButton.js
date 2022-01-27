import React, {useEffect, useState } from 'react'
import Button from 'react-bootstrap/button'
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import {createFavorite, findFavorite, deleteFavorite} from '../../../custom_modules/handleFavorite'


const FavoriteButton = ( props ) => {
    const [favorite, setFavorite] = useState(null)

    useEffect(() => {
        findFavorite(props.user.id, props.coffeeShop.id, setFavorite)
    }, [props])

    const handleFavorited = () => {
        createFavorite(props.user.id, props.coffeeShop.id, setFavorite)
    }

    const handleUnfavorited = () => {
        deleteFavorite(props.user.id, props.coffeeShop.id)
        setFavorite(null)
    }

    return(
        <>
            {   
                favorite ?
                    <Button 
                        variant="outline-secondary"
                        onClick={handleUnfavorited}
                    >
                        <MdOutlineFavorite />
                    </Button>
                    :
                    <Button 
                        variant="outline-secondary"
                        onClick={handleFavorited}
                    >
                        <MdOutlineFavoriteBorder />
                    </Button>
            }
        </>
    )
}

export default FavoriteButton