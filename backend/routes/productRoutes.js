import express from 'express'
import { products,product } from '../controllers/productController.js   ';
const router= express.Router();

router.get('/products',products);
router.get('/product/:id',product)

export default router;