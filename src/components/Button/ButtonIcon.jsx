import React from 'react';
import '../Styles/styles.css'



const ButtonIcon = ({ icon: Icon = null, type, disabled, children, onClick, iconSize}) => {
    return (
        <>
            <button
                type={type}
                disabled={disabled}
                onClick={onClick}
            >{Icon && <Icon size={iconSize} />}
                {children}
            </button>
        </>
    )
}

ButtonIcon.defaultProps = {
    onClick: () => null,
    children: null,
    // primary: null,
};


export default ButtonIcon;