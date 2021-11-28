import React from 'react'

interface BlogCardProps{
    title : string;
    picture : string;
    desc : string;
    link : string;
}

const BlogCard = ({title, desc, picture, link} : BlogCardProps) => {
    var desc = desc.substring(0, 200);
    desc = `${desc}...`
    return (
        <div className="rounded-md bg-white-100 shadow-md text-center py-2 px-4">
            <img src={picture} alt={title} />
            <h2 className="font-Inter font-bold text-black">
                {title}
            </h2>
            <p className="font-Inter text-gray-300 text-sm">
                {desc}
            </p>
            <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold p-3 rounded-full text-xs flex flex-row items-center">
              <p className="ml-2 font-Inter">Lihat Lanjutannya</p>
            </button>
        </div>
    )
}

export default BlogCard
