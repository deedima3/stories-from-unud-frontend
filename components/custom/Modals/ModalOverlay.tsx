import React from 'react'

interface Overlay {
    children : JSX.Element;
    darkAmount : number;
 }

const ModalOverlay = ({children, darkAmount} : Overlay) => {
    return (
        <div className={`absolute w-full h-full bg-gray-${darkAmount} top-0 left-0 flex justify-center items-center z-50 bg-opacity-40`}>
            {children}
        </div>
    )
}

export default ModalOverlay
