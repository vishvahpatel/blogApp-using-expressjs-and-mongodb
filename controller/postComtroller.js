import Post from '../models/postmodels.js'

export const addpost = async(req,res)=>{
    try {
        const {title,body,like,comment} = req.body
        const post = new Post({title,body,like:like||[],comment:comment||[]})
        const savePost = await post.save()
        // const addingPost = await Post.findByIdAndUpdate(post,{$push:{post:savePost._id}},{new:true})
        //                     .populate("post").exec()
        res.status(200).json({
            success:true,
            post:savePost
        })
    } catch (error) {
        res.status(500).json({
            error:"Error in adding post"
        })
    }
}

export const removepost = async(req,res)=>{
    try {
        const {id}=req.params
         await Post.findByIdAndDelete({_id:id})
         res.status(200).json({
            success:true,
            message:"Post removed successfully"
         })
    } catch (error) {
        res.status(500).json({
            error:"Error in removing post"
        })
    }
}