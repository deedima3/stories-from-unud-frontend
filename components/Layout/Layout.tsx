import React from 'react'
import Footer from '../custom/Footer'
import Navbar from '../custom/Navbar'

const Layout: React.FC<{}> = ({ children }) => {
    return (
        <>
            <Navbar/>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="flex items-center justify-center">
                    {children} 
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Layout
