import React from 'react'

const Groupinfo : React.FC<{ image: string, nama: string, nomor: string }> = ({ image, nama, nomor }) = () => {
    return (
        <div className="flex flex-col">
            <img src={image} alt="" className="rounded h-2/3"/>
            <h3 className="font-bold text-black">
                {nama}
            </h3>
            <h6 className="font-bold text-gray-400">
                {nomor}
            </h6>
        </div>
    )
}

export default Groupinfo
