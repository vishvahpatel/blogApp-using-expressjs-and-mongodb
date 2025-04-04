import blogApp from '../models/postmodels.js'

export const getblogApp = async (req,res)=>{
    try {
        const response= await blogApp.find({})
        res.status(200).json({
            success:true,
            data:response,
            message:"data found successfully"
        })
    } catch (error) {
        console.error(error)
        console.log(error)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })
    }
}

export const getblogAppById = async(req,res)=>{
    try {
        const id= req.params.id
        const response = await blogApp.findById({_id:id})
        if(!response){
            res.status(404).json({
                success:false,
                message:"no data found"
            })
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"data found successfully"
        })
    } catch (error) {
        console.error(error)
        console.log(error)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })
    }
}