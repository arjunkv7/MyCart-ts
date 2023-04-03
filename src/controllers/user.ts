import models from '../models/index'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export let loginUser = (req:any) => {
    return new Promise(async (resolve,reject) => {
        try {
            let { userName , password } = req.body;
            let adminNotExist =  await models.User.countDocuments();
            if(adminNotExist === 0) {
                let password = "123456"
                let salt = 10
                let saltRound = await bcrypt.genSalt(salt)

              password = await bcrypt.hash(password, salt)
                let newUser = await new models.User({
                    firstName: 'Admin',
                    lastName: 'Admin',
                    username: 'admin',
                    password: password
                }).save()
            }
            let user:any = await models.User.findOne({ userName: userName});

            if(!user) return reject({ message: 'Wrong userName'});

            let verifyPass = await bcrypt.compare(password,user.password);
            if(verifyPass) {
                let token = jwt.sign(user._id,'pass');
                resolve(token)
            }
            else{
                return reject({ message: 'Wrong password'})
            }
        } catch (err) {
            console.log(err);
            reject(err);
            
        }
    })
}