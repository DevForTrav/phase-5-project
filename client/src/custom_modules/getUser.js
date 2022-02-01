const axios = require('axios')


export const getUser = (setUser) => {
    axios.get('/me')
    .then((res) => {
        setUser(res.data) 
        // props.setLoggedIn(true)
    })
}