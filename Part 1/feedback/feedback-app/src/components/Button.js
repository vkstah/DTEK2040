import React from 'react'

const Button = ({children, handleClick}) => {
    const styles = {
        display: "block",
        borderRadius: "0.5rem",
        width: "8rem",
        padding: "0.5rem 0",
        margin: "1rem 0",
        border: "none",
        cursor: "pointer"
    }

    return (
        <button
            style={styles}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default Button