import express from 'express'
import 'dotenv/config'
import dbconnect from "./config/database.js"; 
import blogApp from './routes/blogroutes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api/v1',blogApp)


app.listen(PORT,()=>{
    console.log(`app is running at port ${PORT}`)
})
dbconnect()
app.get('/',(req,res)=>{
    res.send(`at home page`)
})

