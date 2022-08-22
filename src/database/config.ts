import { DataSource } from "typeorm";
import "dotenv/config"
import User from "../entity/userModel";
import Student from "../entity/studentModel";
import Subject from "../entity/subjectsModel";


export default new DataSource({
    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: "root",
    password: "dipendra@1",
    database: 'practice',
    synchronize: true,
    logging: true,
    entities: ['./src/entity/*Model.ts'],
     //entities: [""],
    // entities: [User,Student,Subject]

})