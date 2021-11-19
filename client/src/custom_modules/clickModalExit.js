const clickModalExit = (e, props) => {
    if (e.target.className === 'btn-close') {
        props.displayForm(!props.isClicked)
    }
}

module.exports = { clickModalExit }