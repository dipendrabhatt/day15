
import datasource from "../database/config"
import {validate} from "class-validator"
import Subjects from "../entity/subjectsModel";
import { Tags, Route, Post, SuccessResponse, Body } from "tsoa";

@Tags('photo')
@Route('/api/subject') 
class SubjectService {

    @Post('/')
    @SuccessResponse("201", "Added")
    public  async subjectAdd(@Body() data:Subjects){
        
        try{
            const user = new Subjects();

            user.subName = data.subName;
            user.credit = data.credit;
            user.students = data.students;
        
            const repository = datasource.getRepository(Subjects)
    
              
                      
   
                               const datas = await repository.save(user);

                                  if(datas){
                                     return{success:"true",message:"data saved succesfully",datas}
                                     }else{
                                         return{success:"false",message:"data not saved"}
          
                                     }

    } 
        catch(err){

            console.log(err);
    
        }

    }


}

export  {SubjectService}