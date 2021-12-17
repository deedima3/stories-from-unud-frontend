import React from 'react'
import ArticleFields from '../../components/custom/articles/ArticleFields'
import ArticleTitle from '../../components/custom/articles/ArticleTitle'
import Layout from '../../components/Layout/Layout'
import createImagePlugin from '@draft-js-plugins/image';
import { Article } from '../../apis/ArticleInterface';
import { EditorState, convertFromRaw, RichUtils, convertToRaw, ContentState} from 'draft-js';
import BlogArticleApi from '../../apis/BlogArticleApi';
import { useRouter } from 'next/router'

const ArticlePost = ({ response : { title, article, imageUrl, author,  dateTimeCreated, visitor} } : any) => {

    console.log(title)

    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    // Render post...
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const imagePlugin = createImagePlugin();
    const plugins = [imagePlugin]

    let articleState : EditorState

    const checkValidJSON = () => {
        try{
            JSON.parse(article)
            return true
        }
        catch(e){
            return false
        }
    }

    if(checkValidJSON()){
        articleState = EditorState.createWithContent(convertFromRaw((JSON.parse(article))))
    }else{
        articleState = EditorState.createWithContent(ContentState.createFromText(article))
    }

    

    return (
        <Layout>
            <ArticleTitle 
            title={title} 
            image={imageUrl}
            className={'mt-8 w-full flex flex-col items-center'} 
            author={author}
            readOnly
            />
            <ArticleFields
                    className="mt-8 w-full"
                    article={articleState}
                    plugin={plugins}
                    readOnly
                />
        </Layout>
    )
}

export async function getStaticProps({ params } : any){

    const response = await BlogArticleApi.getArticleById(params.articleId)
    return{
        props : { response },
        revalidate : 30
    }
}

export async function getStaticPaths(){
    
    const response = await BlogArticleApi.getAllArticle()

    const paths = response.map((article: Article) => {
        return {params : {articleId : article.HashNumber.toString()}}
    })

    return { 
        paths, 
        fallback : true, 
    }
}

export default ArticlePost
