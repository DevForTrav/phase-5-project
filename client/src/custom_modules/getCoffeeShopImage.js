const axios = require('axios')

const getCoffeeShopImage = (photoReference, state) => {
    if (photoReference) {
        axios.get(`/coffee_shop_images?photo_reference=${photoReference}`).then( res => {
            state(`data:image/jpeg;base64,${res.data}`)
        })
    } else {
        state("https://st.depositphotos.com/1624098/1935/i/600/depositphotos_19354785-stock-photo-coffee.jpg")
    }
}

module.exports = { getCoffeeShopImage }