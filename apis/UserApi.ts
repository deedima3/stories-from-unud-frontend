import { AxiosResponse, AxiosError } from 'axios';
import Login from '../pages/login';
import { config } from './BlogArticleApi';
import axios from './Index';

export default {
    async UserLogin(username : string, password : string){
        try {
            //Config contains headers and api key
            const response = await axios.post("/login/", {"usernameGET" : username, "passwordGET" : password}, {headers : config} )
            return response.headers.sessionid
        }
        catch(err) {
            return err
        }
    },

    async UserLogout(sid : string){
        try {
            const response = await axios.delete("/logout/", {headers : {sessionID : sid}})
            if(response.status == 200){
                return true
            }
        }
        catch(e) {
            console.log(e)
            return null
        }
    }
}