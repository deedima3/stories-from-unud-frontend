import React from 'react'

interface InfoBlockProps {
    picture : string;
    desc : string;
    title : string;
}

const InfoBlock = ({picture, desc, title} : InfoBlockProps) => {
    return (
        <div className="block">
            <img src={picture} alt={picture} />
            <h3 className="text-blue-500 font-Inter">
                {title}
            </h3>
            <h6 className="text-gray-300 font-bold text-md font-Inter">{desc}</h6>
        </div>
    )
}

export default InfoBlock
