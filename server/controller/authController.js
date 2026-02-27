//To controll login and register file
import User from "../models/UserSchema.js";  //first import the schema
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'


const SECRETKEY = "mySecretKey" //same key should be used in entire project
//logics
export const registerUser =async(req, res)=>{
    try {
        const {username, useremail, userphone, userpassword}=req.body;

        //validation
        const existUser = await User.findOne({email:useremail}) //FindId and findOne both are same used to identify id and or to fetch one value
        if(existUser){
            return res.status(500).json({
                success:false,
                message:"User already exist with this mail"
            })
        }

        const hashedPassword = await bcrypt.hash(userpassword, 10) //10 is a salt/rounds
        
        const newUser = await User.create({
            name:username,
            email:useremail,
            phone:userphone,
            password:hashedPassword
        })
          res.status(201).json({
                success:true,
                message:"User added succesfully!"
            })

    } catch (error) {
        console.log(error);

        res.status(500).json({
                success:false,
                message:"Failed to add user!"
            })

    }
}

export const loginUser = async(req,res) => {
    try {
        const {useremail, userpassword}=req.body; //for login you only need email and password from the frontend
        
        const userExist=await User.findOne({email:useremail});//fetching findOne used to find the id of unknown value
        if(!userExist){
            return res.status(404).json({
                success:false,
                message:"User not found with this email!"
            })
        }
        const isPasswordMatch = await bcrypt.compare(userpassword,userExist.password)
        if(!isPasswordMatch){
               return res.status(500).json({
                success:false,
                message:"invalid password!"
            })
        } 

        //Token: means information of user in a secure way if you have one token then only you can access the data 
        //Token genrate should be after checking the password
        // A JSON Web Token (JWT) is a secure way to send information between a client and a server. It is mainly used in web applications and APIs.
        //const token = await (jwt is which you had imported as package)jwt.sign({payload},SECRETKEY,{options}) sign() is buli in functions
        //structure  of token => eader.payload.signature
        //header =>metadata about token, payload =>data
        //  signature=>secret key + header + payload

       const token =await jwt.sign({id:userExist._id, name:userExist.name}, SECRETKEY, {expiresIn:'3h'})   
        
        res.status(200).json({
                success:true,
                message:"Login Successful!",
                token: token
            })

    } catch (error) {
        console.log(error)
         res.status(500).json({
                success:false,
                message:"failed to add user!"
            })
    }
}