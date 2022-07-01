import { connect } from 'mongoose'

export default () => {
    const connection = connect(process.env.NEXT_PUBLIC_DB_URL)

    if (connection) {
        return console.log('db connected')
    }
    return console.log('could not connect to the db :(')
}