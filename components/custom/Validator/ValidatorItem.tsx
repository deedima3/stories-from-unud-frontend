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
        <div className="flex w-full justify-between">
            <p className="">{hashNumber}. {title}</p>
            <div className="flex w-1/3">
                <OriginalButton variant={'solid'} onClick={acceptHandler} data-hash={hashNumber} hashNumber={hashNumber}>
                    Validate Article
                </OriginalButton>
            </div>
        </div>
    )
}

export default ValidatorItem
