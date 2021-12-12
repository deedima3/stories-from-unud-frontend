import React from 'react'

interface DateAndAuthorProps{
    date : Date
    author : string
    readOnly? : boolean
    setAuthor : React.Dispatch<React.SetStateAction<string>>
}

const DateAndAuthor = ({date, author, readOnly=false, setAuthor} : DateAndAuthorProps) => {
    const handleChange = (text : any) => {
        setAuthor(text.value)
    }
    return (
        <div className="text-bold font-Inter text-md text-gray-500 w-full mt-6 flex">
            <p>Date Posted :{date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()},</p>
            <p>Created By:</p> {readOnly ? `Created By: ${author}` : <input onChange={handleChange}/>}
        </div>
    )
}

export default DateAndAuthor
