import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

interface NavbarLinkProps{
    path : string;
    text : string;
}

const NavbarLink = ({path, text} : NavbarLinkProps) => {
    const router = useRouter();
    return (
        <button className="bg-blue-0 ml-10">
            <Link as="div" href={path}>
                <div className="flex flex-col items-center">
                    <h2 className={`text-gray-400 hover:text-blue-500 font-bold ${router.pathname === path ? "text-blue-400" : "text-gray-400"}`}>
                        {text}
                    </h2>
                    <div className={`rounded-full h-2 w-2 ${router.pathname === path ? "bg-blue-500" : "bg-blue-0" }`}></div>
                </div>
            </Link>
        </button>
    )
}

export default NavbarLink
