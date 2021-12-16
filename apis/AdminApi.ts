import axios from './Index';

export default {
    async getAllAdminArticle(sessionId : string){
        try{
            const res = await axios.get('/adminValidator', {headers : {
                sessionID :  sessionId
            }})
            return res.data
        }
        catch(e){
            console.log(e)
        }
    },

    async validateOkay(hashNumber : string, sessionId : string){
        try{
            const res = await axios.post('/acceptArticle/',{
                "HashNumber" : hashNumber
            } ,{headers : {
                sessionID :  sessionId
            }})
            return res.data
        }
        catch(e){
            console.log(e)
        }
    }
}