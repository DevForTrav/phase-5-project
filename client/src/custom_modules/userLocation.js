export const getUserLocation = async (setUserLocation) => {

    const displayLocationInfo = async position => {
        setUserLocation({
            lat: await position.coords.latitude,
            lng: await position.coords.longitude
        })
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocationInfo);    
    }
}

// module.exports = { getUserLocation }