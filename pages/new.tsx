import React, { useEffect, useState } from 'react'
import { useDebounce } from 'react-use'
import { useLocalStorage } from '../lib/context/hooks/useLocalStorage'
import Layout from '../components/Layout/Layout'
import createImagePlugin from '@draft-js-plugins/image';
import ArticleFields from '../components/custom/articles/ArticleFields';
import { EditorState, convertFromRaw } from 'draft-js';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import ArticleTitle from '../components/custom/articles/ArticleTitle';


const New = () => {
    
   const [article, setArticle] = useState<EditorState>(
    EditorState.createEmpty()
  )
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const {register, handleSubmit, setError, reset, formState : { errors }} = useForm()

    const submitArticle = () => {

    }

    const imagePlugin = createImagePlugin();
    const plugins = [imagePlugin]
    
    return (
        <Layout>
            <ArticleTitle 
            title={"Artikel Pertama"} 
            setTitle={setTitle} 
            image="https://scitechdaily.com/images/New-Hubble-Image-Shows-Part-of-the-Large-Magellanic-Cloud.jpg" 
            className={'mt-8 w-full flex flex-col items-center'} 
            author={author}
            setAuthor={setAuthor}/>
            <ArticleFields
                className="mt-8 w-full"
                article={article}
                setArticle={setArticle}
                plugin={plugins}
            />
        </Layout>
    )
}

export default New
