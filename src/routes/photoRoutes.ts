import express from "express";
import PhotoController from "../controller/photoController";
import multer from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix+ file.originalname )
    }
  })
  const upload = multer({ storage: storage })                 //basic setup

const router = express.Router();
const photoController = new PhotoController()

router.post('/', upload.single('image'), photoController.addPhoto)  //pass uploaded image 


export default router;