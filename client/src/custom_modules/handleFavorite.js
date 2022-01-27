const axios = require('axios')


export const findFavorite = (userId, locationId, setFavorite) => {
    return axios.get(`/favorites/${userId}/${locationId}`).then(
        (res) => {
            setFavorite(res.data)
        }
    )

}

export const createFavorite = (userId, locationId, setFavorite) => {
    return axios.post(`/favorites`, {
        "user_id": userId,
        "location_id": locationId
    }).then( (res)=> {
        setFavorite(res.data)
    })

}

export const deleteFavorite = (userId, locationId) => {
    return axios.delete(`/favorites/${userId}/${locationId}`)
}
