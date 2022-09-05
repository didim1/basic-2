import { NextApiRequest, NextApiResponse } from "next"
import axios from 'axios'
import { UsersType } from "../../interface"

export async function getUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const users: UsersType[] = await response.data
    return users
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({msg: `method ${req.method} not allowed`})
    }
    try {
        const response = await getUsers()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({msg: 'internal server error'})
    }
}