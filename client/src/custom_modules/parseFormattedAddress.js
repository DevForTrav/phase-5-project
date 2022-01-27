const parseFormattedAddress = formattedAddress => {
    const splitAddress = formattedAddress.split(", ")
    const stateAndZip = splitAddress[2].split(' ')
    const [ state, zip ] = stateAndZip

    const coffeeShopLocation = {
        "street": splitAddress[0],
        "city": splitAddress[1],
        state,
        zip
    }
    return coffeeShopLocation
}

module.exports = { parseFormattedAddress }
