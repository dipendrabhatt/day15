import express from "express";
import SubjectController from "../controller/subjectController";


const router = express.Router();
const subjectController = new SubjectController()

router.post('/addSubjects', subjectController.addSubjects)


export default router;