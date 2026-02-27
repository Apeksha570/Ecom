import jwt from 'jsonwebtoken'

const SECRET_KEY="mySecretKey"

const authUser =async(req,res,next) => {
    try {
       const token =req.header("auth-token");  //this name should be same as given in postman key value name
       if(!token){
        return res.status(401).json({
            success:false,
            message:"Token not found"
        })
       } 
       const decoded = jwt.verify(token,SECRET_KEY)  //payload arguments
       req.user = decoded; //you can use this with your entire project 
       next()  //move to next logic
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"Invalid token"
        })
    }
}
export default authUser;