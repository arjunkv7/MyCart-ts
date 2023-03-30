import mongoose from "mongoose";
let Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    mobile: String,

}, { timestamps: true});

let User = mongoose.model('users', userSchema);

module.exports = User;