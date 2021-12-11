import React, { useEffect, useState } from 'react'
import { useDebounce } from 'react-use'
import { useLocalStorage } from '../lib/context/hooks/useLocalStorage'
import Layout from '../components/Layout/Layout'
import createImagePlugin from '@draft-js-plugins/image';
import ArticleFields from '../components/custom/articles/ArticleFields';
import { EditorState, convertFromRaw } from 'draft-js';
import { useRouter } from 'next/router'

const New = () => {
    
   const [article, setArticle] = useState<EditorState>(
    EditorState.createEmpty()
  )

    const submitArticle = () => {

    }

    const imagePlugin = createImagePlugin();
    const plugins = [imagePlugin]

    return (
        <Layout>
            <ArticleFields
                className="mt-8 w-full border-2 border-blue-500"
                article={article}
                setArticle={setArticle}
                plugin={plugins}
            />
        </Layout>
    )
}

export default New
