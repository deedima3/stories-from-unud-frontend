import React from 'react'

interface DateAndAuthorProps{
    date : Date | string
    author : string
    readOnly? : boolean
    setAuthor? : React.Dispatch<React.SetStateAction<string>>
}

const DateAndAuthor = ({date, author, readOnly=false, setAuthor} : DateAndAuthorProps) => {
    const handleChange = (e : any) => {
        if(setAuthor){
            setAuthor(e.target.value)
        }
    }
    return (
        <div className="text-bold font-Inter text-md text-gray-500 w-full mt-6 flex">
            <p>Date Posted :{typeof date === "string" ? date : date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()},</p>
            <p>Created By:</p> {readOnly ? `Created By: ${author}` : <input onChange={handleChange} placeholder="Penulis Artikel"/>}
        </div>
    )
}

export default DateAndAuthor
