import express from "express";
import { createComment } from "../controller/commentController.js";
import { addlike,removelike} from "../controller/likeController.js";
import { addpost,removepost } from "../controller/postComtroller.js";
import { getblogApp,getblogAppById } from "../controller/getPost.js";
const router = express.Router()

router.post('/createComment',createComment)
router.post('/addpost',addpost)
router.delete('/removepost/:id',removepost)
router.post('/addlike',addlike)
router.post('/removelike',removelike)
router.get('/getblogApp',getblogApp)
router.get('/getblogAppById/:id',getblogAppById)


export default router;