import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    disabled? : boolean
    variant : string
    children?: JSX.Element | string,
    onClick? : (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

const OriginalButton = ({disabled = false, variant, children, onClick, type} : ButtonProps) => {
    return (
        <button
            className={`p-5 font-Inter rounded-md font-bold text-sm ${disabled ? "disabled:opacity-50" : ""} 
            ${variant === "solid" ? "bg-blue-500 text-white" 
            : "text-blue-500 bg-white outline-blue-500"}`} onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}

export default OriginalButton
