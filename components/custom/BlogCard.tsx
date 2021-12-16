// @ts-ignore
import { convertFromRaw, EditorState } from 'draft-js';
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

    const checkValidJSON = () => {
        try{
            JSON.parse(desc)
            return true
        }
        catch(e){
            return false
        }
    }

    if(checkValidJSON()){
        const articleState = EditorState.createWithContent(convertFromRaw((JSON.parse(desc))))
        var currentContent = articleState.getCurrentContent()
        desc = currentContent.getPlainText()
    }
    desc = desc.substring(0, 200);
    desc = `${desc}...`
    return (
        <div className="transition transform duration-500 hover:scale-105 ease-in-out flex flex-col rounded-md bg-white-100 shadow-md hover:shadow-2xl text-center py-2 px-4 justify-between items-between h-full">
            <div className="rounded-md w-full overflow-hidden content-center max-h-52 inline-block">
                <img src={picture} alt={title} className="transform duration-500 transition-all object-fill w-full inline-block hover:scale-125" />
            </div>
            <h2 className="font-Inter font-bold text-black mt-5 text-lg">
                {title}
            </h2>
            <p className="font-Inter text-gray-500 text-sm mt-2">
                {desc}
            </p>
            <div className="mb-2">
                <Link href={"blog/" + HashNumber}>
                    <button className="transition transform duration-500 hover:scale-110 hover:translate-y+5 mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold p-3 rounded-full text-xs flex flex-row items-center">
                        <p className="ml-2 font-Inter">Lihat Lanjutannya</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default BlogCard
