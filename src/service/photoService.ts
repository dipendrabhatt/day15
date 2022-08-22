
import datasource from "../database/config"
import { validate } from "class-validator"
import Photos from "../entity/photoModel";
import multer from "multer";
import { FormField, Post, Route, SuccessResponse, Tags, UploadedFile } from "tsoa";

@Tags('photo')
@Route('/api/photo')   //outside class
class PhotoService {
   
  @Post('/')
  @SuccessResponse("201", "Added")
  public async  photoAdd( @FormField() description: string, @UploadedFile() image:Express.Multer.File) {
        
   console.log(image);
   
        try {
            const photo = new Photos();
            photo.filename = image.path;
            photo.description = description;
            const repository = datasource.getRepository(Photos)
            return await repository.save(photo);

        }
        catch (err) {

            console.log(err);

        }

    }


}

export  {PhotoService}