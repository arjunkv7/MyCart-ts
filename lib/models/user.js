"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
let Schema = mongoose_1.default.Schema;
let userSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    mobile: String,
    password: String,
}, { timestamps: true });
let User = mongoose_1.default.model('users', userSchema);
exports.User = User;
