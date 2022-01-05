const axios = require('axios')


const distanceToCoffeeShop = async (currentLocation, coffeeShopLocation) => {
    return await axios.get(`/distance_to_coffee_shops?origins=${currentLocation}&destinations=${coffeeShopLocation}`)
            .then((res) => {
                return res.data
            })

}

module.exports = { distanceToCoffeeShop }