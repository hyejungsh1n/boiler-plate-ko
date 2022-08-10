import React from 'react';
import PropTypes from "prop-types";
import styles from "./Btn.module.css"

Btn.propTypes= {
    text: PropTypes.string
}

function Btn({text}) {
    return <button className={styles.btn}>{text}</button>
}

export default Btn;