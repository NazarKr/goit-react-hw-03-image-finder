import React from "react";
import '../Styles/styles.css'

const Button = ({ onClick, children }) => {
    return (
        <button
            className="Button"
            onClick={onClick}
        >{children}</button>
    )
};

export default Button;
