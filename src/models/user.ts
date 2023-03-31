import mongoose from "mongoose";
let Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    mobile: String,

}, { timestamps: true});

// userSchema.method.hashPassword: Function = (pass:string) => {
//     let salt = 10
// }

let User = mongoose.model('users', userSchema);

export {User};