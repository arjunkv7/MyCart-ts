"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userJwtAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let userJwtAuth = (req, res, next) => {
    try {
        let { token } = req.headers;
        if (!token)
            throw "User doesn't have token";
        let user = jsonwebtoken_1.default.verify(token, 'pass');
        console.log(user);
        next();
    }
    catch (error) {
        console.log(error);
        res.json({ message: error.messae });
    }
};
exports.userJwtAuth = userJwtAuth;
