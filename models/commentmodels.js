import mongoose from "mongoose";
const commentmodels = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    body:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    }
})

export default mongoose.model('Comment',commentmodels)