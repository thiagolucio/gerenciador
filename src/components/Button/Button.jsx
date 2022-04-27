import React from 'react';
import "./Button.css";

function Button({ buttonClass, buttonText, type }) {

    return (
        <button className={buttonClass} type={type}>
          { buttonText }
        </button>
    )
}

export default Button;