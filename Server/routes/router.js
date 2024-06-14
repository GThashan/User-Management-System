import express from 'express'
import {createUser,getUser} from '../Controller/userController.js'

const routers = express.Router();

routers.post('/createuser',createUser);
routers.get('/getUser',getUser);

export default routers