import React from 'react'
import ArticleFields from '../../components/custom/articles/ArticleFields'
import ArticleTitle from '../../components/custom/articles/ArticleTitle'
import Layout from '../../components/Layout/Layout'
import createImagePlugin from '@draft-js-plugins/image';
import { Article } from '../../apis/ArticleInterface';
import { EditorState, convertFromRaw, RichUtils, convertToRaw, ContentState} from 'draft-js';
import BlogArticleApi from '../../apis/BlogArticleApi';
import { useRouter } from 'next/router'
import Loader from '../../components/custom/Loader/Loader';

const ArticlePost = ({ response : { title, article, imageUrl, author,  dateTimeCreated, visitor} } : any) => {

    const router = useRouter()

    // Render post...
    if (router.isFallback) {
        return (
            <Layout>
                <Loader/>
            </Layout>)
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
        revalidate : 1,
    }
}

export async function getStaticPaths(){
    
    const response = await BlogArticleApi.getAllArticle()

    const paths = response.map((article: Article) => {
        return {params : {articleId : article.HashNumber.toString()}}
    })

    return { 
        paths, 
        fallback : "blocking", 
    }
}

export default ArticlePost
