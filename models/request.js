import { Schema, model } from 'mongoose'

const requestSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default new model('requests', requestSchema, 'requests')