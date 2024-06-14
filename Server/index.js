
import express from 'express'
import dotenv from 'dotenv'

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());

app.listen(port,()=>{
    console.log("server is running");
})