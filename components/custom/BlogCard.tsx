import Link from 'next/link';
import React from 'react'

interface BlogCardProps{
    HashNumber : number;
    title : string;
    picture : string;
    desc : string;
    link : string;
}

const BlogCard = ({title, desc, picture, link, HashNumber} : BlogCardProps) => {
    var desc = desc.substring(0, 200);
    desc = `${desc}...`
    return (
        <div className="flex flex-col rounded-md bg-white-100 shadow-md text-center py-2 px-4 justify-between items-between h-full">
            <img src={picture} alt={title} className="rounded-md h-2/3" />
            <h2 className="font-Inter font-bold text-black mt-5">
                {title}
            </h2>
            <p className="font-Inter text-gray-300 text-sm mt-2">
                {desc}
            </p>
            <div className="mb-2">
                <Link href={"blog/" + HashNumber}>
                    <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold p-3 rounded-full text-xs flex flex-row items-center">
                        <p className="ml-2 font-Inter">Lihat Lanjutannya</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default BlogCard
