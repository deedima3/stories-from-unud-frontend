import type { NextApiRequest, NextApiResponse } from 'next'
import AdminApi from '../../apis/AdminApi'

export default async (req : NextApiRequest, res : NextApiResponse) => {
    if(req.method?.toLowerCase() !== 'post' || Array.isArray(req.headers.sessionid)){
        res.status(400).json("Request Bukan POST atau Headersnya Array")
    }
    else{
        console.log(req.body.body.hash)
        console.log(req.headers)
        try{
            const response = await AdminApi.validateOkay(req.body.body.hash!, req.headers.sessionid!)
            if(response){
                res.status(200).json(response)
            }
        }
        catch(e){
            console.log(e)
            res.status(400).json("Error")
        }
    }
}