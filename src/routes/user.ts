import express, { request,response}  from "express";
import jwt from "jsonwebtoken";
let router = express.Router();
import {loginUser} from '../controllers/user'

router.post('/login', async (req,res) => {
    try {
        let isLogedIn = await loginUser(req);
        res.status(200).json(isLogedIn)
    } catch (err:any) {
        console.log(err);
        res.status(400).send(err.message);
        
    }
});

export default router;