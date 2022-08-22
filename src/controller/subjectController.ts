import service from "../service/userService"
import { Request, Response} from "express";
import {SubjectService} from "../service/subjectService";



const subjectService = new SubjectService()
export default class SubjectController{


async addSubjects(req: Request, res: Response) {

    console.log(req.body);
   
    const result: any = await subjectService.subjectAdd(req.body)
    res.status(200).send(result)

  }

}