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
const index_1 = __importDefault(require("../models/index"));
exports.loginUser = (req) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let { userName, password } = req.body;
            let adminNotExist = yield index_1.default.User.countDocuments();
            if (adminNotExist) {
                let newUser = yield new index_1.default.User({
                    firstName: 'Admin',
                    lastName: 'Admin',
                    username: 'admin',
                    password
                });
            }
            let user = yield index_1.default.User.findOne({ userName: userName });
            if (!user)
                return reject({ message: 'Wrong userName' });
        }
        catch (err) {
            console.log(err);
            reject(err);
        }
    }));
};
