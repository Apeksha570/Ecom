import express from 'express'
import { registerUser, loginUser }from '../controller/authController.js';

//create instance
const router = express.Router();

//routes
router.post("/register", registerUser);  //path name is ur choice but function name is from the related controller file
router.post("/login", loginUser);

export default router;