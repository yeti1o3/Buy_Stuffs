import express from 'express';
import dotenv from 'dotenv'
import connectDB from './connectDB.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config();
const app=express();
app.use(express.json());

connectDB();

app.use('/api/auth',authRoutes)

const port=process.env.PORT||4000;
app.listen(port,()=>{
    console.log("app is listening on ",4000);
})