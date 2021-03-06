import React from 'react'
import Footer from '../custom/Footer'
import Navbar from '../custom/Navbar'

const Layout: React.FC<{}> = ({ children }) => {
    return (
        <>
            <Navbar/>
            <div className="w-full flex flex-col justify-center items-center min-h-full">
                <div className="md:w-4/5 w-3/5 flex flex-col items-center min-h-screen">
                    {children} 
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Layout
