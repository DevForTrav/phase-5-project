const getUserLocation =  (state) => {

        const displayLocationInfo =  position => {
            
            const userLocation = {
                lng: position.coords.longitude,
                lat: position.coords.latitude
            }

            state(userLocation)
        }


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(displayLocationInfo);    
        }
}

module.exports = { getUserLocation }