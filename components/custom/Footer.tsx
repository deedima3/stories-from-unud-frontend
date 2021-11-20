import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 flex flex-row justify-center items-center w-full h-24 mt-10">
            <div className="flex flex-col justify-start items-center">
                <p className="text-white ml-4 font-semibold">
                    Copyright by Group 5, All Right Reserved
                </p>
                <p className="text-white font-semibold">
                    For Web Related Inquiries Contact <a href="" className="text-blue-500"> Koding Katze</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
