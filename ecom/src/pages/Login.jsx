import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'

export default function Login() {
    //here form is function and setForm is a function
    const [form,setForm]=useState({   
       useremail:'',
       userpassword:''
    })

    const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})    
    } // if you are using universal fn then name is required

    const handleSubmit = async()=>{
        try {
            const res = await axios.post("http://localhost:7000/auth/login",form)
            console.log(res)
            if(res.data.success){
                alert("Registration is successful")
                localStorage.setItem("myToken",res.data.token)
            }
            else{
                alert("Registration Failed Try again")
            }
            setForm({
                 useremail:'',
                 userpassword:''
            })
        }  catch (error) {
            console.log(error)
            alert("Login Failed")
        }
    }//prompts means without getting the output we are jumping to next

     const handleClear = ()=>{
        localStorage.removeItem("myToken")
        window.location.reload()
     }

  return (
    <div>
        <Typography variant='h3' sx={{textAlign:'center',mb:2}}>Login Page</Typography>
        <Box sx={{display:'flex',justifyContent:'space-around'}}>

        
        <TextField id="outlined-basic" label="Email" variant="outlined"
         onChange={handleChange}
         name="useremail"
         value={form.useremail}
        />
        
        <TextField id="outlined-basic" label="Password" variant="outlined"
         onChange={handleChange}
         name="userpassword"
         value={form.userpassword}
        />

        <Button variant="contained" onClick={handleSubmit}>Submit</Button> {/**call the handleSubmit function in the button */}
       
        <Button variant="contained"
         onClick={()=>alert(localStorage.getItem("myToken"))}
         >View Token
         </Button>

         <Button variant="contained"
         onClick = {handleClear}
         >Clear Token
         </Button>

        </Box>
    </div>
  )
}