import connection from '../../db/connection'
import Requests from '../../models/request'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        connection()

        const { name, email, message } = req.body

        if (!name || !email || !message) {
            return res
                .status(422)
                .json({ err: 'All fields are required!' })
        }

        const request = new Requests({
            name, email, message
        })
        try {
            const saveReq = await request.save()
            console.log(saveReq);
            return res
                .status(201)
                .json({
                    message: 'Request Saved successfully!'
                })
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({
                    err: 'Something went wrong'
                })
        }
    }
}