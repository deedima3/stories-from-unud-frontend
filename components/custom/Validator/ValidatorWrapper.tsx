import React, { useReducer } from 'react'

interface ValidationWrapperProps {
    children : JSX.Element
}

const ValidatorWrapper = ({children} : ValidationWrapperProps) => {
    return (
        <div className=''>
            {children}
        </div>
    )
}

export default ValidatorWrapper
