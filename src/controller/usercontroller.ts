import service from "../service/userService"
import { Request, Response} from "express";



export default class UserController{
    async addUser(req: Request, res: Response) {

        console.log(req.body);
       
        const result: any = await service.userAdd(req.body)
        res.status(200).send(result)
    
      }

     

    
}