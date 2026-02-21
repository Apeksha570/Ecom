import User from "../models/UserSchema.js";    //path should be accurate and ".js" should be used because for backend build tool is required

//structure of the logic
//export const fnName = async(req,res)=>{
     //try{
       //access data from frontend(only for add and update)
       //access id from url(update, delete, singleView)
       //validation
       //data manipulation using mongodb function
       //send the response -> res.status(stCode).json({object}) in object any object name is fine 
     //}catch(error){
       //send the error response
     //}
  //}


//business logics and inisde the function try catch should be used for exception handling to avoid entire crash in the code
export const createUser = async(req,res)=>{
  try {
    const {username, useremail, userphone} = req.body;//whatever data sending with the request will combined as a body i.e req.body
    console.log(req.body) //to check the output
    const addData = await User.create({
      name:username,
      email:useremail,
      phone:userphone,
      
    });// or you can also write directly as req.body only  && send the same keys from the frontend and this concept is called as destructuring  
    res.status(201).json({
        success:true,
        message:"Data added Successfully!"
    })
} catch (error) {
    console.log(error)
     res.status(500).json({
        success:false,
        message:"Error while adding the data"// or you can pass the error parameter directly
    })
  }
}
/*export {
    createUser,
}*/  //or you can directlu use export keyword in the beginning only 
export const viewUsers=async(req,res)=>{
  try {
    const allData = await User.find();//for frontend json format is required so send it as json(inside that object{})
    res.status(200).json({
      success:true,
      message:"Data fetched Successfully!",
      data: allData
    })
  } catch (error) {
    console.log(error) //inside catch what is written that only passed in console
    res.status(500).json({
      success:false,
      message:error
    }) 
   }
}

export const singleView=async(req,res)=>{ //same function name should be imported in routes i.e singleView
  try {
    const id = req.params.mangalore; //to access anything from routes use params and also if you set any parameter in routing pass the same parameter here
    const userData=await User.findById(id); //and in backend we use req.params
    res.status(355).json({
      success:true,
      message:"We got user Data!"
   })

  } catch (error) {
     console.log(error) //inside catch what is written that only passed in console
    res.status(500).json({
      success:false,
      message:"internal server error!"
    }) 
  }
}

export const deleteUser = async(req,res)=>{
  try { 
    const id = req.params.id; //to access anything from routes use params and also if you set any parameter in routing pass the same parameter here
    const userData=await User.findByIdAndDelete(id); //and in backend we use req.params
    res.status(550).json({
      success:true,
      message:"We deleted the user Data!"
   })
  } catch (error) {
     console.log(error) //inside catch what is written that only passed in console
    res.status(500).json({
      success:false,
      message:"internal server error!"
    })
  }
}

//update
export const updateUser = async(req,res)=>{
  try {
    const id=req.params.id;
    const data = req.body;
    const updatedata = await User.findByIdAndUpdate(id,data,{new:true})
     res.status(200).json({
      success:true,
      message:"We deleted the user Data!",
      newUserData:updatedata
   })
  } catch (error) {
     console.log(error) //inside catch what is written that only passed in console
    res.status(500).json({
      success:false,
      message:"internal server error!"
    })
  }
}