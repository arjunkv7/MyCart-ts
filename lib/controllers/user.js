"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const index_1 = __importDefault(require("../models/index"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let loginUser = (req) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let { userName, password } = req.body;
            let adminNotExist = yield index_1.default.User.countDocuments();
            if (adminNotExist === 0) {
                let password = "123456";
                let salt = 10;
                let saltRound = yield bcrypt_1.default.genSalt(salt);
                bcrypt_1.default.hash(password, salt, (data) => { console.log(data); password = data; });
                let newUser = yield new index_1.default.User({
                    firstName: 'Admin',
                    lastName: 'Admin',
                    username: 'admin',
                    password: password
                }).save();
            }
            let user = yield index_1.default.User.findOne({ userName: userName });
            if (!user)
                return reject({ message: 'Wrong userName' });
            let verifyPass = yield bcrypt_1.default.compare(password, user.password);
            if (verifyPass) {
                let token = jsonwebtoken_1.default.sign(user._id, 'pass');
                resolve(token);
            }
            else {
                return reject({ message: 'Wrong password' });
            }
        }
        catch (err) {
            console.log(err);
            reject(err);
        }
    }));
};
exports.loginUser = loginUser;
