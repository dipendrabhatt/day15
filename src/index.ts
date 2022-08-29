import express, { Application} from "express"
import "dotenv/config";
import userRoute from "./routes/userRoutes"
import studentRoutes from "./routes/studentRoutes"
import subjectRoutes from "./routes/subjectRoutes"
import photoRoutes from "./routes/photoRoutes"
import DataSource from "./database/config";
import swaggerUI from 'swagger-ui-express';
import swaggerui from "../build/swagger.json"
import fileUpload from "express-fileupload";


// import swaggerui from "../build/"
import { RegisterRoutes } from "../build/routes";
// import Student from "./entity/studentModel";




const app:Application = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use('/api/user', userRoute)
app.use('/api/student', studentRoutes)
app.use('/api/subject', subjectRoutes)
app.use('/api/photo', photoRoutes)
RegisterRoutes(app);
app.use(
    "/api-docs",
   swaggerUI.serve,
    swaggerUI.setup(swaggerui)
  );
  
  app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));


app.listen(process.env.PORT, async () => {
    await DataSource.initialize()    //must
    console.log(`the server is running on the port ${process.env.PORT}`);
   

})