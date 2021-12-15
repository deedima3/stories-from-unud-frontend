import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"
import { UserData } from '../../apis/UserData'
import UserApi from "../../apis/UserApi"
import BlogArticleApi from '../../apis/BlogArticleApi'

export default async (req : NextApiRequest, res : NextApiResponse) => {
    if(req.method?.toLowerCase() !== 'get'){
        res.status(400).json("Request Bukan GET")
    }
    else{
        console.log(req.body)
        try{
            const response = await BlogArticleApi.getAllArticle()
            if(response.data){
                res.status(200).json(response.data)
            }
        }
        catch(e){
            console.log(e)
            res.status(400).json("Error")
        }
    }
}