import React from 'react'

interface ErrorMessageProps{
    error : string;
}

const ErrorMessage = ({error} : ErrorMessageProps) => {
    return (
        <p className="text-red-600 font-Inter text-sm mt-1">
            {error}
        </p>
    )
}

export default ErrorMessage
