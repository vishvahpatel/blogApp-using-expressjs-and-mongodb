import Comment from "../models/commentmodels.js";
import Post from "../models/postmodels.js"

export const createComment = async(req,res)=>{
    try {
        const {post,body,user}=req.body;

        const comment = new Comment({post,body,user})
        const saveComment = await comment.save()
        const updatedPost= await Post.findByIdAndUpdate(post,{$push:{comments:saveComment._id}},{new:true})
                            .populate("comments").exec();
        res.status(200).json({
            success:true, 
            post:updatedPost
})}catch (error) {
       console.log(error);
       console.error(error)
       res.status(500).json({
        error:"error while creating comment"
       }) 
    }
}