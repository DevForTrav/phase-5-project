const clickModalExit = (e, props) => {
    if (e.target.className === 'btn-close') {
        props.renderModal(false)
    }
}

module.exports = { clickModalExit }