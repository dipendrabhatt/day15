import { StudentService } from "../service/studentService";
import { Request, Response} from "express";


const service = new StudentService();
export default class StudentController{
async addStudents(req: Request, res: Response) {

    console.log(req.body);
   
    const result: any = await service.studentAdd(req.body)
    res.status(200).send(result)

  }

}