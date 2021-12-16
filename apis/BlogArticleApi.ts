import { AxiosResponse, AxiosError } from 'axios';
import envConfig from './env.config';
import axios from './Index';

export interface ApiErrorResponse {
    message: string;
}

export const config = {
    'token' : envConfig.ApiToken
}

export interface BlogPost{
    title : string;
    imageUpload : string;
    article : string;
    author : string;
}

export default {
    async getArticleById(articleId : string) {
        try{
            const response = await axios.get(`blog-post/one-item/?HashNumber=${articleId}`, {headers : config})
            return response.data
        }catch(e){
            console.log(e)
            return false;
        }
    },
    
    async getAllArticle(){
        try{
            const response = await axios.get('blog-post/', {headers : config})
            return response.data
        }catch(e){
            console.log(e)
            return false;
        }
    },

    async searchArticle(search : string){
       try{
           const response = await axios.get('search/?' + `keyword=${search}`, {headers : config})
           return response.data
       }catch(e){
           console.log(e)
           return false;
       }
    },

    async createArticle(content : BlogPost){
        try{
            const response = await axios.post('create/article', content, {headers : config})
            return response.data
        }
        catch(e){
            console.log(e)
            return false;
        }
    }
}