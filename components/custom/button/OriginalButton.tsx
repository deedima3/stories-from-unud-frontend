import React from 'react'

interface ButtonProps {
    disabled : boolean
    variant : string
    children: JSX.Element,
}

const OriginalButton = ({disabled, variant, children} : ButtonProps) => {
    return (
        <button
            className={`p-5 text-bold font-Inter ${disabled ? "disabled:opacity-50" : ""} 
            ${variant === "solid" ? "bg-blue-500 text-white" 
            : "text-blue-500 bg-white outline-blue-500"}`}
        >
            {children}
        </button>
    )
}

export default OriginalButton
