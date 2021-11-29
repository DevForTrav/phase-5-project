const clickModalExit = (e, props) => {
    if (e.target.className === 'btn-close') {
        // console.log(props)
        props.renderModal(false)
    }
}

module.exports = { clickModalExit }