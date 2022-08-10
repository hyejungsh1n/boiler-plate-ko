import React from 'react'
import PropTypes from "prop-types";

Btn.propTypes= {
    text: PropTypes.string
}

function Btn({text}) {
    return <button>{text}</button>
}

export default Btn;