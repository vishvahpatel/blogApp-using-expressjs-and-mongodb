import mongoose from "mongoose";

const postmodels = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
})

export default mongoose.model('Post',postmodels)