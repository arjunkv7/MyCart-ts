import models from '../models/index'
import bcrypt from 'bcrypt';

exports.loginUser = (req) => {
    return new Promise(async (resolve,reject) => {
        try {
            let { userName , password } = req.body;
            let adminNotExist =  await models.User.countDocuments();
            if(adminNotExist) {
                let password = "123456"
                let salt = 10
                let saltRound = await bcrypt.genSalt(salt)
                password = await bcrypt.hash(password, saltRound)
                let newUser = await new models.User({
                    firstName: 'Admin',
                    lastName: 'Admin',
                    username: 'admin',
                    password: password
                }).save()
            }
            let user = await models.User.findOne({ userName: userName});
            if(!user) return reject({ message: 'Wrong userName'});
        } catch (err) {
            console.log(err);
            reject(err);
            
        }
    })
}