import React, {useEffect, useState} from 'react'
import Navigation from '../Navigation'
import { getUserFavorites } from '../../custom_modules/getUserFavorites'
import RenderKafficoCoffeeShops from './RenderKafficoCoffeeShops'
import Container from 'react-bootstrap/Container'


const UserFavorites = ( props ) => {
    const [coffeeShops, setCoffeeShops ] = useState(null)


    useEffect((() => {
        getUserFavorites(props.user.id, setCoffeeShops)
    }),[props])

    return (
        <>
            <Container>
                { props.userLocation && <RenderKafficoCoffeeShops {...props} coffeeShops={coffeeShops} parentComponent="kaffico" userLocation={props.userLocation} />}
            </Container>
        </>

    )


}

export default UserFavorites