const axios = require('axios')

const createCoffeeShop = async (coffeeShopData) => {

    return axios.post('/coffee_shops', {
        "name": coffeeShopData.name,
        "house_roasted": false,
        "roaster_name": null
    }).then( res => {
        return res.data
    })
}

module.exports = { createCoffeeShop }