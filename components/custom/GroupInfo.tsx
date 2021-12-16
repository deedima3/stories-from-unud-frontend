import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Link from "next/link"

interface GroupInfoProps {
    image : string;
    nama : string;
    nim : string;
    desc : string;
    github : string;
    ig : string;
}

const Groupinfo = ({ image, nama, nim, desc, github, ig } : GroupInfoProps) => {
    return (
        <div className="flex flex-col items-center w-1/2 mt-10 text-center" data-aos="fade-up">
            <div className="rounded-full hover:rounded-xl shadow-md transform duration-500 hover:scale-105 transition-all hover:shadow-2xl overflow-hidden">
                <img src={image} alt={nama}/>
            </div>
            <h1 className="font-bold text-black text-3xl">
                {nama}
            </h1>
            <h2 className="font-bold text-gray-400 text-3xl">
                {nim}
            </h2>
            <p className="font-normal text-black text-xl">
                {desc}
            </p>
            <div className="flex flex-row justify-between items-center mt-5 w-1/6">
                <Link href={github}>
                    <div className='transform duration-500 hover:scale-125 transition-all hover:shadow-2xl bg-white'>
                    <FontAwesomeIcon icon={["fab", "github"]} size="2x"/>
                    </div>
                </Link>
                <Link href={ig}>
                    <div className='transform duration-500 hover:scale-125 transition-all hover:shadow-2xl bg-white'>
                        <FontAwesomeIcon icon={["fab", "instagram"]} size="2x"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Groupinfo
