import mongoose from 'mongoose'
import 'dotenv/config';
 const dbconnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("database connected successfully"))
    .catch((error)=>{
        console.error(error)
        console.log("database not connected")
        process.exit(1)
    })
}
export default dbconnect;