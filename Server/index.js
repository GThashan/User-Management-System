import express from 'express'
import dotenv from 'dotenv'
import {dbConnect} from './Utils/db.js'
import routers from './routes/router.js';
import cors from 'cors'

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());
app.use('/api',routers);
dbConnect();

app.listen(port,()=>{
    console.log("server is running");
})