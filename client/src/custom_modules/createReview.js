const axios = require('axios')

const createReview = (reviewData) => {
    return axios.post('/reviews',{
        "title": reviewData["title"],
        "description": reviewData["description"],
        "overall_rating": reviewData["overall_rating"],
        "ambience_description": reviewData["ambience_description"],
        "beverage_rating": reviewData["beverage_rating"],
        "service_rating": reviewData["service_rating"],
        "location_id": reviewData["location_id"],
        "user_id": reviewData["user_id"]
    }).then( res => {
        return res
    })

}

module.exports = { createReview }