import React, { useEffect, useState } from 'react'
import Link from "next/link"
import router, { useRouter } from 'next/router'

const Navbar = () => {
    const [isNavbarStick, setIsNavbarStick] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const scrollListener = () => {
          window.pageYOffset > 30
            ? setIsNavbarStick(true)
            : setIsNavbarStick(false);
        };
        window.addEventListener('scroll', scrollListener);
        return () => window.removeEventListener('scroll', scrollListener);
      }, []);
    return (
        <nav className={`w-full flex-row flex justify-center sticky top-0 bg-white ${isNavbarStick ? "shadow-md" : ""}`}>
            <div className="flex justify-between flex-row w-4/5 h-20 items-center">
            <div className="brand">
                <img src="mainLogo.png" alt="Logo Stories from Unud" className="h-20"/>
            </div>
            <div className="flex flex-row items-center h-10 w-1/3 justify-between">
                <button className="bg-blue-0">
                    <Link href="/">
                        <h2 className={`text-gray-400 hover:text-blue-500 font-bold ${router.pathname === "/" ? "text-blue-400" : "text-gray-400"}`}>
                            Home
                        </h2>
                    </Link>
                </button>
                <button className="bg-blue-0">
                    <Link href="/blog">
                        <h2 className={`text-gray-400 hover:text-blue-500 font-bold ${router.pathname === "/blog" ? "text-blue-400" : "text-gray-400"}`}>
                            Blog Post
                        </h2>
                    </Link>
                </button>
                <button className="bg-blue-0">
                    <Link href="/our">
                        <h2 className={`text-gray-400 hover:text-blue-500 font-bold ${router.pathname === "/our" ? "text-blue-400" : "text-gray-400"}`}>
                            Our Group
                        </h2>
                    </Link>
                </button>
                <button className="bg-blue-0">
                    <Link href="/new">
                        <h2 className={`text-gray-400 hover:text-blue-500 font-bold ${router.pathname === "/new" ? "text-blue-400" : "text-gray-400"}`}>
                            New Post
                        </h2>
                    </Link>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>
            </div>
        </div>
        </nav>
    )
}

export default Navbar
