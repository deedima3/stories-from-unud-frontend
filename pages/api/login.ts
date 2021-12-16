import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"
import { UserData } from '../../apis/UserData'
import UserApi from "../../apis/UserApi"

export default async (req : NextApiRequest, res : NextApiResponse) => {
    if(req.method?.toLowerCase() !== 'post'){
        res.status(400).json("Request Bukan POST")
    }
    else{
        const body = JSON.parse(req.body)
        if(Array.isArray(body.username) || Array.isArray(body.password)){
            res.status(400).json("Bodynya Isi Array")
        }else{
            const response = await UserApi.UserLogin(body.username, body.password)
            if(response){
                res.status(200).json({sessionId : response})
            }
            else{
                res.status(400).json("Api Nya Salah ato Axiosnya response gaada")
            }
        }
    }
}