const axios = require('axios')

export const getUserFavorites = (userId, setFavoriteCoffeeShops) => {
    return axios.get(`/users/${userId}/locations`).then(
        (res) => {
            setFavoriteCoffeeShops(res.data)
        }
    )

}