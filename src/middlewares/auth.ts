import models from '../models/index'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export let userJwtAuth = (req:any, res:any, next:any) => {
    try {
        let { token } = req.headers;

        if(!token) throw "User doesn't have token"
        let user = jwt.verify(token, 'pass');
        console.log(user)
        next()
    } catch (error:any) {
        console.log(error);
        res.json({ message: error.messae})
    }

} 