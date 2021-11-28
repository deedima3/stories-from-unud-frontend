import { AxiosResponse, AxiosError } from 'axios';
import envConfig from './env.config';
import axios from './Index';

export interface ApiErrorResponse {
    message: string;
}

const config = {
    'token' : envConfig.ApiToken
}

export default {
    async getArticleById(articleId : string) {
        let response: AxiosResponse | AxiosError<ApiErrorResponse>;
    },
    
    async getAllArticle(){
        try{
            const response = await axios.get('/', {headers : config})
            return response.data
        }catch(e){
            console.log(e)
            return false;
        }
    },

    async searchArticle(searchKeyword : string, sortBy : string){
        let response: AxiosResponse | AxiosError<ApiErrorResponse>;
    },

    async createArticle(){
        let response: AxiosResponse | AxiosError<ApiErrorResponse>;
    }
}