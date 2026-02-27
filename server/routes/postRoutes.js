import express from 'express'
import { createPost, viewPosts} from '../controller/postController.js';
import authUser from '../controller/middleware/authUser.js';

const router=express.Router();

router.post("/createPost",authUser,createPost)
router.get("/viewPosts",viewPosts)
export default router;