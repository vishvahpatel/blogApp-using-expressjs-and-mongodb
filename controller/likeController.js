import Like from '../models/likemodels.js'
import Post from '../models/postmodels.js'

export const addlike = async (req,res)=>{
    try {
        const {post,user} = req.body
    const like = new Like({post,user})
    const saveLike = await like.save()
    const updateLikePost = await Post.findByIdAndUpdate(post,{$push:{likes:saveLike._id}},{new:true})
                            .populate("likes").exec()
    res.status(200).json({
        success:true,
        post:updateLikePost
    })
    } catch (error) {
        res.status(500).json({
            error:"Error in adding like"
        })
    }
    
}

export const removelike = async(req,res)=>{
    try {
        const {post,like} = req.body
        const deletedlike =  await Like.findOneAndDelete({post:post,_id:like})
        const removeLikeFromPost =await Post.findByIdAndUpdate(post,{$pull:{likes:deletedlike._id}},{new:true})
        res.status(200).json({
            post:removeLikeFromPost
        })
    } catch (error) {
        res.status(500).json({
            error:"error in removing like from post"
        })
    }
}