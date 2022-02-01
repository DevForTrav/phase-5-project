const axios = require('axios')



export const getCoffeeShopLocations = (setCoffeeShops, userLocation) => {
    console.log(userLocation)
    
    axios.get(`/locations/?user_location=${userLocation.lat},${userLocation.lng}`)
        .then((res) => {
            setCoffeeShops(res.data)
        }).catch((err) => {
            console.log(err)
        })
}