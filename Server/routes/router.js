import express from 'express'
import {createUser,getUser,updateUser,deleteUser} from '../Controller/userController.js'

const routers = express.Router();
routers.post('/createuser',createUser);
routers.get('/getUser',getUser);
routers.put('/update/:id',updateUser);
routers.delete('/delete/:id',deleteUser);

export default routers