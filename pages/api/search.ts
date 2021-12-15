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
        if(Array.isArray(req.query.keyword)){
            res.status(400).json("Bodynya Isi Array")
        }else{
            const response = await BlogArticleApi.searchArticle(req.query.keyword)
            if(response){
                res.status(200).json(response)
            }
            else{
                res.status(400).json("Api Nya Salah ato Axiosnya response gaada")
            }
        }
    }
}