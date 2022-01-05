const axios = require('axios')
const fs = require("fs")

const getCoffeeShopImage = (photo_reference, state) => {
    axios.get("/coffee_shop_images", {
        photo_reference
    }).then( res => {
        const image = res.data
        state(URL.createObjectURL(new Blob(Buffer.from(image,"base64"), { type: 'image/png'})))
        
    })
}

module.exports = { getCoffeeShopImage }