import express from 'express'
import { createUser, viewUsers, singleView, deleteUser, updateUser} from '../controller/userController.js'

//crate one routing instance
const router = express.Router()

//routes
//createUser is a instance.httpMethod("/path",handler)
router.post("/addUser",createUser)
router.get("/viewUsers",viewUsers) //you can give any path name but method should be proper
router.get("/singleView/:mangalore",singleView)
//for singleView what parameter you gave in userController same thing should be passsed in the path i.e :id
router.delete("/delete/:id",deleteUser)
router.put("/update/:id",updateUser)
//export
export default router;