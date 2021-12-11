import Editor from 'draft-js-wysiwyg/types/components/Editor/Editor'
import React, { useEffect, useState } from 'react'
import { useDebounce, useLocalStorage } from 'react-use'
import Layout from '../components/Layout/Layout'

const New = () => {

    const [editorState, setEditorState] = useState("")
    
    const [article, setArticle, removeArticle] = useLocalStorage("")

    const submitArticle = () => {
        removeArticle()
    }

    useDebounce(() => setArticle(editorState), 1000, [editorState])

    return (
        <Layout>
            <Editor editorState={editorState} onChange={setEditorState} />;
        </Layout>
    )
}

export default New
