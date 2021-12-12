import React from 'react'
import DateAndAuthor from './DateAndAuthor'

interface ArticleTitleProps{
    title : string;
    setTitle : React.Dispatch<React.SetStateAction<string>>
    image : string;
    className : string
    readOnly? : boolean
    setAuthor : React.Dispatch<React.SetStateAction<string>>
    author : string;
    date? : Date;
}

const ArticleTitle = ({image, title, className, readOnly=false, setTitle, setAuthor, date, author} : ArticleTitleProps) => {
    const handleChange = (text : any) => {
        setTitle(text.value)
    }

    const getDate = () => {
        var today = new Date()
        return today
    }

    return (
        <section className={`${className} max-w-6xl`}>
            {readOnly ? 
                    <h1 className="w-full h-10 text-5xl font-bold">
                    {title}
                </h1>
            : 
            <textarea
                    placeholder="Judul Blog"
                    cols={1}
                    rows={2}
                    onChange={handleChange}
                    className="w-full text-5xl font-bold resize-none focus:border-gray-500"
                >

                </textarea>
            }
            <DateAndAuthor date={date ? date : getDate()} author={author} setAuthor={setAuthor} readOnly={readOnly} />
            <div className="border-2 border-blue-500 mt-12 w-full rounded-2xl overflow-hidden max-h-80">
                <img className="object-fill" src={image} alt={image} />
            </div>
        </section>
    )
}

export default ArticleTitle
