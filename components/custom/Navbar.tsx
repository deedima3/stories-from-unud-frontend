import React, { useEffect, useState } from 'react'
import Link from "next/link"
import router, { useRouter } from 'next/router'
import NavbarLink from './NavbarLink';

const Navbar = () => {
    const [isNavbarStick, setIsNavbarStick] = useState(false);
    useEffect(() => {
        const scrollListener = () => {
          window.pageYOffset > 30
            ? setIsNavbarStick(true)
            : setIsNavbarStick(false);
        };
        window.addEventListener('scroll', scrollListener);
        return () => window.removeEventListener('scroll', scrollListener);
      }, []);
      const [isHamburger, setIsHambuger] = useState(false);
      useEffect(() => {
          
      })
    return (
        <nav className={`bg-white w-screen flex-row flex justify-center sticky top-0 z-50 ${isNavbarStick ? "shadow-md" : ""}`}>
            <div className="flex justify-between flex-row w-4/5 h-20 items-center">
            <div className="brand max-w-content">
                <img src="mainLogo.png" alt="Logo Stories from Unud" className="h-20"/>
            </div>
            {isHamburger ? <NavbarDesktop/> : <NavbarMobile/>}
        </div>
        </nav>
    )
}

const NavbarDesktop = () => {
    return(
        <div className="flex flex-row items-center h-10 w-max justify-between flex-shrink-0">
            <NavbarLink text="Home" path="/"/>
            <NavbarLink text="Blog Post" path="/blog"/>
            <NavbarLink text="Our Group" path="/our"/>
            <NavbarLink text="New Post" path="/new"/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10">
                <Link href="/login">Login</Link>
            </button>
        </div>
    )
}

const NavbarMobile = () => {
    const [isOpened, setOpened] = useState(false)
    return(

    )
}

export default Navbar
