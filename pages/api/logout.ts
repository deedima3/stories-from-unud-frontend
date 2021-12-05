import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"
import { UserData } from '../../apis/UserData'
import UserApi from "../../apis/UserApi"
import Router from 'next/router'

export default async ({headers : { sessionID }} : NextApiRequest, res : NextApiResponse) => {
    if(Array.isArray(sessionID)){
        res.status(400).json("Session ID Salah")
    }
    else{
        const response = await UserApi.UserLogout(sessionID!)
        if(response){
            res.status(200).json("Sudah Ter Logout")
            Router.push("/")
        }
        else{
            res.status(400).json("Backend API Salah")
        }
    }
}