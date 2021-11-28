import React from 'react'

interface SectionTitleProps{
    title : string;
    subtitle : string;
}

const SectionTitle = ({ title, subtitle } : SectionTitleProps) => {
    return (
        <div className="text-center mt-10">
            <h2 className="font-Inter text-blue-500 font-bold text-4xl">
                {title}
            </h2>
            <h3 className="font-Inter text-gray-300 font-bold text-lg">
                {subtitle}
            </h3>
        </div>
    )
}

export default SectionTitle
