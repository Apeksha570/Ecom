import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'

export default function Register() {
    //here form is function and setForm is a function
    const [form,setForm]=useState({   
       username:'',
       useremail:'',
       userphone:'',
       userpassword:''
    })

    const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})    
    } // if you are using universal fn then name is required

    const handleSubmit = async()=>{
        try {
            const res = await axios.post("http://localhost:7000/auth/register",form)
            console.log(res)
            if(res.data.success){
                alert("Rrgistration is successful")
            }
            else{
                alert("Registration Failed Try again")
            }
            setForm({
                 username:'',
                 useremail:'',
                 userphone:'',
                 userpassword:''
            })
        }  catch (error) {
            console.log(error)
            alert("Login Failed")
        }
    }//prompts means without getting the output we are jumping to next
  return (
    <div>
        <Typography variant='h3' sx={{textAlign:'center',mb:2}}>Register Page</Typography>
        <Box sx={{display:'flex',justifyContent:'space-around'}}>

        <TextField id="outlined-basic"
         label="Name" 
         variant="outlined"
         onChange={handleChange}
         name="username"
         value={form.username}
        />
        <TextField id="outlined-basic" label="Email" variant="outlined"
         onChange={handleChange}
         name="useremail"
         value={form.useremail}
        />
        <TextField id="outlined-basic" label="Phone" variant="outlined"
         onChange={handleChange}
         name="userphone"
         value={form.userphone}
        />
        
        <TextField id="outlined-basic" label="Password" variant="outlined"
         onChange={handleChange}
         name="userpassword"
         value={form.userpassword}
        />

        <Button variant="contained" onClick={handleSubmit}>Submit</Button> {/**call the handleSubmit function in the button */}
        </Box>
    </div>
  )
}