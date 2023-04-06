import express, { request,response}  from "express";
import jwt from "jsonwebtoken";
let router = express.Router();
import {loginUser} from '../controllers/user'

router.post('/login', async (req,res) => {
    try {
        let token = await loginUser(req);
        res.status(200).json({ token: token});
    } catch (err:any) {
        console.log(err);
        res.status(400).send(err.message);
        
    }
});

export default router;