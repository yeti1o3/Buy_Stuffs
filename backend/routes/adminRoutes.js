import express from 'express';
import { multerMiddleware } from '../middleware/multerMiddleware.js';
import { uploadToCloudinary } from '../middleware/uploadToCloudinaryMiddleware.js';
import {addproduct} from '../controllers/adminController.js'

const router=express.Router();

router.post('/addproducts',multerMiddleware,uploadToCloudinary,addproduct);

export default router;