import React from 'react'

interface Overlay {
    children : JSX.Element;
    darkAmount : number;
 }

const ModalOverlay = ({children, darkAmount} : Overlay) => {
    return (
        <div className={`absolute bottom-0 right-0 top-0 left-0 bg-gray-${darkAmount} flex justify-center items-center z-50 bg-opacity-40`}>
            {children}
        </div>
    )
}

export default ModalOverlay
