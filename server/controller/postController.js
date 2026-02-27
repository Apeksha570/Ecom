import Post from "../models/postSchema.js";

//logic
export const createPost = async(req,res)=>{
    try {
        const {caption, image}=req.body;
        const userid = req.user.id;  //give req.user.id or .name for to access individual data
        console.log(userid)
        const newPost = await Post.create({
            caption,
            image,
            user: userid
        })
        res.status(201).json({
            success:true,
            message:"Post created successfully!",
            data: newPost
        })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        success:false,
        message:"Failed to create Post!"
      })  
    }
}
//To get the post this view post is created
export const viewPosts= async(req,res)=>{
    try {
        const allposts=await Post.find().populate("user"); //displaying entire details by refferring userSchema
        res.status(200).json({
            success:true,
            message:"Post fetched successfully!",
            data:allposts
        })
    } catch (error) {
        console.log(error)
     res.status(500).json({
            success:false,
            message:"Failed to fetch"
    })  
    }
}