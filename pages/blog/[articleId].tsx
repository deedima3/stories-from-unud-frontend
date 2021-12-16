import React from 'react'
import ArticleFields from '../../components/custom/articles/ArticleFields'
import ArticleTitle from '../../components/custom/articles/ArticleTitle'
import Layout from '../../components/Layout/Layout'
import createImagePlugin from '@draft-js-plugins/image';
import { Article } from '../../apis/ArticleInterface';
import { EditorState, convertFromRaw, RichUtils, convertToRaw, ContentState} from 'draft-js';
import BlogArticleApi from '../../apis/BlogArticleApi';

const ArticlePost = ({ response : { title, article, imageUrl, author,  dateTimeCreated, visitor} } : any) => {

    console.log(title)

    const imagePlugin = createImagePlugin();
    const plugins = [imagePlugin]

    const articleState = EditorState.createWithContent(ContentState.createFromText(article))


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

    return { paths, fallback : false}
}

export default ArticlePost
