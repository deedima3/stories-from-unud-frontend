import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import OriginalButton from '../button/OriginalButton'
import DateAndAuthor from './DateAndAuthor'

interface ArticleTitleProps{
    title : string;
    setTitle? : React.Dispatch<React.SetStateAction<string>>
    image : string;
    setImage? : React.Dispatch<React.SetStateAction<string>>
    className : string
    readOnly? : boolean
    setAuthor? : React.Dispatch<React.SetStateAction<string>>
    author : string;
    date? : string;
}

const ArticleTitle = ({image, title, className, readOnly=false, setTitle, setAuthor, date, author, setImage} : ArticleTitleProps) => {
    const handleChange = (e : any) => {
       if(setTitle){
        setTitle(e.target.value)
       }
    }

    const getDate = () => {
        var today = new Date()
        return today
    }

    const {register, handleSubmit, setError, reset, formState : { errors }} = useForm()

    const uploadPicture = async (data : any) => {
        let api_key = "311db8c13408e6df459fafb99e14d7f9"
        let baseURL = "https://api.imgbb.com/1/upload"
        let file = await getBase64(data.image[0])
        const formData = new FormData()
        formData.append("key", api_key)
        formData.append("image", file)
        try {
            axios.post(baseURL, formData)
            .then((response) => {
                if(setImage){
                    setImage(response.data.data.image.url)
                }
            })
        }
        catch(e){
            console.log(e)
        }
    }

    const getBase64 = (file : File) => {
        return new Promise<string>((resolve, reject) => {
            var reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = function (){
                if(typeof(reader.result) == "string"){
                    resolve((reader.result!).replace(/^.*,/, ''))
                }
            }
            reader.onerror = error => reject(error);
        })
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
            {image ? <div className="mt-12 w-full rounded-2xl overflow-hidden max-h-80 content-center">
                <img className="object-fill w-full" src={image} alt={image} />
            </div>
            : ""}
            {readOnly ? ""
                :
                <div className="mt-8">
                    <form onSubmit={handleSubmit(uploadPicture)}>
                        <input type="file"
                        {...register("image", {required : true})}
                        accept=".jpg, .jpeg, .png"
                        ></input>
                    <OriginalButton variant={'solid'} type="submit">Save Picture</OriginalButton>
                </form>
                </div>
            }
        </section>
    )
}

export default ArticleTitle
