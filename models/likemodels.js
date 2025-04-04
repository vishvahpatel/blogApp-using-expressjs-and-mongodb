import mongoose from 'mongoose'

const likemodels = new mongoose.Schema({
    post:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"Post"
    },
    user:{
        type:String,
        required:true
    }
})
export default mongoose.model('Like',likemodels)