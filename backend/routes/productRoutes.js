import express from 'express'
import { products } from '../controllers/productController.js   ';
const router= express.Router();

router.get('/products',products);

export default router;