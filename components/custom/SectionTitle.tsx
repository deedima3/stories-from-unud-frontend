import React from 'react'

const SectionTitle : React.FC<{ title : string, subtitle : string}> = ({ title, subtitle }) => {
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
