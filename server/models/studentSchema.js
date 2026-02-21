import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },   // for required default value is false in JS so we had mentioned it
    collegename:{
        type: String,
        required:true,
    },
    usn:{
        type: String,
        required:true,
        unique:true
    },
    department:{
        type: String,
        required: true
    },
    course:{
        type: String,
        required:true
    }
})
const Student = mongoose.model("User",studentSchema) //studentSchema is the model name u gave 
export default Student;
