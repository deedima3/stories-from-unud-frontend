import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"
import { UserData } from '../../apis/UserData'
import UserApi from "../../apis/UserApi"
import Router from 'next/router'

export default async ( req : NextApiRequest, res : NextApiResponse) => {
    if(Array.isArray(req.body.sessionID)){
        res.status(400).json({"message" : "SID Salah"})
    }
    else{
        const body = JSON.parse(req.body)
        const response = await UserApi.UserLogout(body.sessionID!)
        if(response == true){
            res.status(200).json({"message" : "Sudah Ter Logout"})
        }
        else{
            res.status(400).json({"message" : "Backend API Salah"})
        }
    }
}