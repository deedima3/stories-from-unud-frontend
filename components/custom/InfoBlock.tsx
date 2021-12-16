import React from 'react'

interface InfoBlockProps {
    picture : string;
    desc : string;
    title : string;
}

const InfoBlock = ({picture, desc, title} : InfoBlockProps) => {
    return (
        <div className="flex flex-col text-center mt-10 md:ml-5 lg:md-0 lg:w-1/3 items-between justify-between h-96">
            <div className="max-h-2/3 flex justify-center">
                <img src={picture} alt={picture} className='transition transform duration-500 hover:scale-110 hover:translate-y+5'/>
            </div>
            <div className="">
                <h3 className="text-blue-500 font-Inter text-3xl font-bold">
                    {title}
                </h3>
                <h6 className="text-gray-400 font-normal text-md font-Inter text-lg">{desc}</h6>
            </div>
        </div>
    )
}

export default InfoBlock
