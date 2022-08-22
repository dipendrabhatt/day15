import express from "express";
import StudentController from "../controller/studentController";


const router = express.Router();
const studentController = new StudentController()

router.post('/', studentController.addStudents)


export default router;