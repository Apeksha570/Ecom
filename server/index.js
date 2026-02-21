//first things we have to import something is very important and where semicolon is optional 
import express from 'express' 
import mongoConnection from './db.js'
 //file name only you have to give i.e there is no build tool in backend so here is extension
import userRouter from './routes/userRoutes.js'
import cors from'cors'
import authRouter from './routes/authRoutes.js'

 const app = express()
app.use(express.json())   //middleware is needed inorder to recieve/pass json data from the frontend
mongoConnection();  // call the function in Javascript
//create a middleware after cors import && //inside the middleware you can access an object
app.use(cors())

const PORT = 7000

//test API(optional)http method and give one path and create a arrow function inside that two values request(req) and response(res)
app.get("/test" ,(req,res)=>{
  res.send("Hello World")
})

//create a middleware called /users and by using this only we can access the route
app.use("/users", userRouter) //it should be placed before app.listen 
app.use("/auth", authRouter)

app.listen(PORT,()=>{
    console.log("Server Stared on " + PORT)
})


