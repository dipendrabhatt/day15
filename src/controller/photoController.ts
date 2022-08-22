import { PhotoService } from "../service/photoService"
import { Request, Response} from "express";


const photoService = new PhotoService();

export default class PhotoController{


    async addPhoto(req: Request, res: Response) {

      const data = JSON.parse(JSON.stringify(req.body)) 

         console.log(` hi ${data.description}`);
         console.log(` hello ${req.file?.path}`);
         
          if (req.file===undefined) return 0   //undefined csse req for file u
      
        const addNews=await photoService.photoAdd(data.description,req.file)

        if(addNews) res.json({success:"true", Message:"image uploaded"})
        else res.json({success:"false", Message:"image not uploaded"})
    
    
      }

     

    
}