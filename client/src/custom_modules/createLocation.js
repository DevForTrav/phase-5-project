const parseFormattedAddress =  require('./parseFormattedAddress')
const axios = require('axios')

const createLocation = async (props, coffeeShopData) => {
        const itemizedAddress = parseFormattedAddress.parseFormattedAddress(props.coffeeShop.formatted_address)
        return axios.post('/locations', {
            "formatted_address": props.coffeeShop.formatted_address,
            "coffee_shop_id": coffeeShopData.id,
            "place_id": props.coffeeShop.place_id,
            "photo_reference": props.coffeeShop.photos[0].photo_reference,
            "coordinates": `${props.coffeeShop.geometry.location.lat},${props.coffeeShop.geometry.location.lng}`,
            "street_address": itemizedAddress.street,
            "city": itemizedAddress.city,
            "state": itemizedAddress.state,
            "zip": itemizedAddress.zip

        }).then( res => {
            return res.data
        })
}

module.exports = { createLocation }