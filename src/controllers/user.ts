import models from '../models/index'

exports.loginUser = (req) => {
    return new Promise(async (resolve,reject) => {
        try {
            let { userName , password } = req.body;
            let adminNotExist =  await models.User.countDocuments();
            if(adminNotExist) {
                let newUser = await new models.User({
                    firstName: 'Admin',
                    lastName: 'Admin',
                    username: 'admin',
                    password
                })
            }
            let user = await models.User.findOne({ userName: userName});
            if(!user) return reject({ message: 'Wrong userName'});
        } catch (err) {
            console.log(err);
            reject(err);
            
        }
    })
}