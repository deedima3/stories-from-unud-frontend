import React from 'react'

interface SectionTitleProps{
    title : string;
    subtitle : string;
}

const SectionTitle = ({ title, subtitle } : SectionTitleProps) => {
    return (
        <div>
            <h2 className="font-Inter text-blue-500">
                {title}
            </h2>
            <h3 className="font-Inter text-grey-400">
                {subtitle}
            </h3>
        </div>
    )
}

export default SectionTitle
