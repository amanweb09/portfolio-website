import connection from '../../db/connection'
import Users from '../../models/user'
import crypto from 'crypto'
import { sign } from 'jsonwebtoken'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        connection()
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(422)
                .json({ err: 'All fields are required!' })
        }

        try {
            const user = await Users
                .findOne({ email })

            if (!user) {
                return res
                    .status(404)
                    .json({ err: 'User not found with this email' })
            }

            const hashedPassword = crypto
                .createHmac('sha256', process.env.PASSWORD_SECRET)
                .update(password)
                .digest('hex')

            if (hashedPassword === user.password) {

                const at = sign({ _id: user._id }, process.env.TOKEN_SECRET, {
                    expiresIn: '1h'
                })

                res.cookie('at', at)
                return res
                    .status(200)
                    .json({ message: 'Login successful!' })
            }

            return res
                .status(401)
                .json({ err: 'Invalid credentials' })

        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ err: 'Internal server error!' })
        }
    }
}