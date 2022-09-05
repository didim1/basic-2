import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { UsersType } from "../../../interface";

export async function getUser(req: string) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${req}`)
    const user: UsersType = response.data
    return user
}



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const {method, query: {id}} = req
    switch (method) {
        case 'GET':
            try {
                const response = await getUser(String(id))
                res.status(200).json(response)
            } catch (error) {
                res.status(404).json({msg: `user ${id} not found`})
            }
            break;
    
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).json({msg: `method ${method} not allowed`})
            break;
    }
    
}