import User from "../entity/userModel";
import datasource from "../database/config"
import {validate} from "class-validator"
import Student from "../entity/studentModel";

class UserService {

    static userAdd = async (data:any) =>{
        
        try{
            const user = new User();

            user.userName = data.userName;
            user.phone = data.phone;
            user.email = data.email;

            const repository = datasource.getRepository(User)
            const errors = await validate(user)
                     if (errors.length > 0) {
                   
                       

                      throw new Error(`Validation failed!`)
                      

                 } else {
   
                               const datas = await repository.save(user);

                                  if(datas){
                                     return{success:"true",message:"data saved succesfully",datas}
                                     }else{
                                         return{success:"false",message:"data not saved"}
          
                                     }

        }
    } 
        catch(err){

            console.log(err);
    
        }

    }


}

export default UserService