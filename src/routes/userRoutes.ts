import express from "express";
import UserController from "../controller/usercontroller";


const router = express.Router();
const userController = new UserController()

router.post('/addUsers', userController.addUser)


export default router;