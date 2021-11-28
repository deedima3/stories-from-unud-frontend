import React from 'react'

interface InfoBlockProps {
    picture : string;
    desc : string;
    title : string;
}

const InfoBlock = ({picture, desc, title} : InfoBlockProps) => {
    return (
        <div className="block text-center">
            <img src={picture} alt={picture} />
            <h3 className="text-blue-500 font-Inter text-3xl font-bold">
                {title}
            </h3>
            <h6 className="text-gray-300 font-normal text-md font-Inter text-lg">{desc}</h6>
        </div>
    )
}

export default InfoBlock
