
import datasource from "../database/config"
import { validate } from "class-validator"
import Students from "../entity/studentModel";
import { Body, FormField, Post, Route, SuccessResponse, Tags } from "tsoa";
import {student} from "../interface/interface"



@Tags('photo')
@Route('/api/student') 
class StudentService {


    @Post('/')
    @SuccessResponse("201", "Added")
    public  async  studentAdd(@Body() data: student) {

        try {
            const user = new Students();

            user.studentName = data.studentName;
            user.rollNo = data.roll_no;


            const repository = datasource.getRepository(Students)
            const errors = await validate(user)
            if (errors.length > 0) {
                throw new Error(`Validation failed!`)
            } else {
                const datas = await repository.save(user);

                if (datas) {
                    return { success: "true", message: "data saved succesfully", datas }
                } else {
                    return { success: "false", message: "data not saved" }

                }

            }
        }
        catch (err) {

            console.log(err);

        }

    }


}

export  {StudentService}