import Link from 'next/link'
import React from 'react'
import OriginalButton from '../button/OriginalButton'

interface ValidatorItemProps{
    title : string;
    hashNumber : number;
    acceptHandler: (e : React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

const ValidatorItem = ({title, hashNumber, acceptHandler} : ValidatorItemProps) => {
    return (
        <div className="flex w-full justify-between items-center mt-5">
            <p className="text-lg"><span className='font-bold'>{hashNumber}.</span> {title}</p>
            <OriginalButton variant={'solid'} onClick={acceptHandler} data-hash={hashNumber} hashNumber={hashNumber}>
                Validate Article
            </OriginalButton>
        </div>
    )
}

export default ValidatorItem
