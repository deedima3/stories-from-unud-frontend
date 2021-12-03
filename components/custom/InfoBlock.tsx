import React from 'react'

interface InfoBlockProps {
    picture : string;
    desc : string;
    title : string;
}

const InfoBlock = ({picture, desc, title} : InfoBlockProps) => {
    return (
        <div className="flex flex-col text-center mt-10 md:ml-5 lg:md-0 lg:w-1/3 items-center">
            <img src={picture} alt={picture} />
            <h3 className="text-blue-500 font-Inter text-3xl font-bold">
                {title}
            </h3>
            <h6 className="text-gray-300 font-normal text-md font-Inter text-lg">{desc}</h6>
        </div>
    )
}

export default InfoBlock
