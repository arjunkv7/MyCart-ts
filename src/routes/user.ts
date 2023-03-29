import express, { request,response}  from "express";
import jwt from "jsonwebtoken";
let router = express.Router();

router.post('/login', async (req,res) => {
    try {
        let { username,password } = req.body;
        if( username && password){
            let token = await jwt.sign(username, 'Pass');

            res.status(200).json({ token : token});
            console.log('token generation')
            console.log(token)
        }

    } catch (err) {
        console.log(err);
        res.status(400).send(err);
        
    }
});

export default router;