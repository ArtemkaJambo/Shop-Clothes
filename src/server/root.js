import express from 'express'
import cors from 'cors'
import authorization from './authorization.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', authorization)


app.listen(3000, () => {
    console.log('server is started');    
})
