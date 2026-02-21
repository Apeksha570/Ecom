import mongoose from "mongoose";
//const mongoose = require('mongoose)
const mongo_url='mongodb://localhost:27017/newOne';   //semicolon is optinonal in JS

const mongoConnection = async ()=>{
    try{
        await mongoose.connect( mongo_url);
        console.log("Database Connected");
    } catch (error){
        console.log("Error in connection")
    }
} 
//exception handling methods==>async and await(wait until it execute/moves to next line) snd await is used only inside async
export default mongoConnection;
//module.export=mongoConnection;