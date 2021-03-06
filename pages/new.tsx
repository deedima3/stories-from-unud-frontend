import React, { useEffect, useState } from 'react'
import { useDebounce } from 'react-use'
import { useLocalStorage } from '../lib/context/hooks/useLocalStorage'
import Layout from '../components/Layout/Layout'
import createImagePlugin from '@draft-js-plugins/image';
import ArticleFields from '../components/custom/articles/ArticleFields';
import { EditorState, convertFromRaw, RichUtils, convertToRaw} from 'draft-js';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import ArticleTitle from '../components/custom/articles/ArticleTitle';
import ArticleToolbars from '../components/custom/articles/ArticleToolbars';
import axios from 'axios';
import Modals from '../components/custom/Modals/Modals';
import Loader from '../components/custom/Loader/Loader';


const New = () => {
    
   const [article, setArticle] = useState<EditorState>(
    EditorState.createEmpty()
  )
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false)

    const {register, handleSubmit, setError, reset, formState : { errors }} = useForm()


    const imagePlugin = createImagePlugin();
    const plugins = [imagePlugin]

    const handleRichText = (inlineStyle: string) => (
        e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
      ) => {
        e.preventDefault();
        setArticle(RichUtils.toggleInlineStyle(article, inlineStyle));
      };
    
      const handleImageClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        const urlValue = window.prompt('Paste Image Link');
        console.log(urlValue);
        if (urlValue === ' ' || urlValue === '') return;
        setArticle(imagePlugin.addImage(article, urlValue!, {}));
      };
    
      const handleBlockType = (bType: string) => (
        e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
      ) => {
        e.preventDefault();
        setArticle(RichUtils.toggleBlockType(article, bType));
      };

      const handleSave = (e : React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
          setLoading(true)
          e.preventDefault()
          const data = {
            "title" : title,
            "imageUpload" : image,
            "article" : JSON.stringify(convertToRaw(article.getCurrentContent())),
            "author" : author
          }
          try {
            axios.post('api/new', data)
            .then((response) => {
                console.log(response)
                setLoading(false)
            })
          }
          catch(e){
              console.log(e)
              setLoading(false)
          }
      }
    
    return (
      <>
        <Layout>
            <ArticleTitle 
            title={"Artikel Pertama"} 
            setTitle={setTitle} 
            image={image}
            setImage={setImage}
            className={'mt-8 w-full flex flex-col items-center'} 
            author={author}
            setAuthor={setAuthor}/>
            <div className="flex w-full justify-center">
                <ArticleToolbars 
                    richTextHandler={handleRichText} 
                    blockTypeHandler={handleBlockType} 
                    onImageClick={handleImageClick}
                    saveHandler={handleSave}
                />
                <ArticleFields
                    className="mt-8 w-full"
                    article={article}
                    setArticle={setArticle}
                    plugin={plugins}
                />
            </div>
        <Modals show={loading} onClose={() => setLoading(false)} isLoading>
          <Loader></Loader>
        </Modals>
        </Layout>
      </>
    )
}

export default New
