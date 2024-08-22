import express from 'express';
import dotenv from 'dotenv'
import connectDB from './connectDB.js'
import authRoutes from './routes/authRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import productRoutes from './routes/productRoutes.js'
dotenv.config();
const app=express();
app.use(express.json());

connectDB();

app.use('/api/auth',authRoutes);
app.use('/api/admin',adminRoutes);
app.use('/api/product',productRoutes);

const port=process.env.PORT||4000;
app.listen(port,()=>{
    console.log("app is listening on ",4000);
})