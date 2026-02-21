import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },   // for required default value is false in JS so we had mentioned it
    email:{
        type: String,
        required:true,
        unique: true
    },
    phone:{
        type: String,
        required: true
    },
    password: {
        type:String,
        required:true
    }
})
const User = mongoose.model("User",userSchema) //userSchema is the variable u gave 
export default User;

//steps:
//1.import mongoose
//2.create one variable and for that assign new mongoose.Schema({object}) schema is a blueprint of connection
//3.inside object create key and for that key assign one object and inside that object we can define type,required,unique etc(how the field should be defined).
//4.create one variabe and for that assign mongoose.model("modelName"schemaName)
//5.then create 3 folders models-->manage schemas,controller ->business logic and routes-->manage routing end points
//6.export default modelName
