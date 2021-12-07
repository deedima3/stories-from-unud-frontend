import React from 'react'

interface ButtonProps {
    disabled? : boolean
    variant : string
    children: JSX.Element | string,
    onClick : () => void;
}

const OriginalButton = ({disabled = false, variant, children, onClick} : ButtonProps) => {
    return (
        <button
            className={`p-5 font-Inter rounded-md font-bold text-sm ${disabled ? "disabled:opacity-50" : ""} 
            ${variant === "solid" ? "bg-blue-500 text-white" 
            : "text-blue-500 bg-white outline-blue-500"}`} onClick={onClick}
        >
            {children}
        </button>
    )
}

export default OriginalButton
