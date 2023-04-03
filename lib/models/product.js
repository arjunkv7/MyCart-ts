"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
let Schema = mongoose_1.default.Schema;
let productSchema = new Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
}, { timestamps: true });
let Products = mongoose_1.default.model('products', productSchema);
exports.Products = Products;
