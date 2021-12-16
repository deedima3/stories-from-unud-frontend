import React, { useReducer } from 'react'
import SectionTitle from '../SectionTitle'

interface ValidationWrapperProps {
    children : JSX.Element
}

const ValidatorWrapper = ({children} : ValidationWrapperProps) => {
    return (
        <>
            <div className='w-full p-5 px-10'>
                {children}
            </div>
        </>
    )
}

export default ValidatorWrapper
