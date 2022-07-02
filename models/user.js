import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    accessToken: {
        type: String
    }
}, {
    timestamps: true
})

export default new model('users', userSchema, 'users')