const axios = require('axios')


export const getGoogleCoffeeShops = (setGoogleCoffeeShops, userLocation) => {
    // console.log(userLocation)
    axios.get(`/google_places?latitude=${userLocation.lat}&longitude=${userLocation.lng}`)
        .then((res) => {
            setGoogleCoffeeShops(res.data)
        })
}