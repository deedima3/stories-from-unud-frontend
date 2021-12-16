import type { NextApiRequest, NextApiResponse } from 'next'
import AdminApi from '../../apis/AdminApi'

export default async (req : NextApiRequest, res : NextApiResponse) => {
    if(req.method?.toLowerCase() !== 'get' || Array.isArray(req.headers.sessionid)){
        res.status(400).json("Request Bukan GET atau Headersnya Array")
    }
    else{
        console.log(req.headers)
        try{
            const response = await AdminApi.getAllAdminArticle(req.headers.sessionid!)
            console.log(response)
            res.status(200).json(response)
        }
        catch(e){
            console.log(e)
            res.status(400).json("Error")
        }
    }
}