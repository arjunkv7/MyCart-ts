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
exports.getSingleProduct = exports.editProduct = exports.addProduct = void 0;
const index_1 = __importDefault(require("../models/index"));
let addProduct = (req) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let data = req.body;
            let newProduct = yield new index_1.default.Products({
                name: data.name,
                price: data.price,
                category: data.category
            }).save();
            resolve(newProduct);
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    }));
};
exports.addProduct = addProduct;
let editProduct = (req) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let { product_id } = req.body;
            let data = req.body;
            let updatedProduct = yield index_1.default.Products.findByIdAndUpdate(product_id, {
                name: data.name,
                price: data.price,
                category: data.category
            }, { new: true });
            if (!updatedProduct)
                return reject({ message: 'Please provide a valid product_id' });
            resolve(updatedProduct);
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    }));
};
exports.editProduct = editProduct;
let getSingleProduct = (req) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let { product_id } = req.query;
            let productDetails = yield index_1.default.Products.findById(product_id);
            if (!productDetails)
                return reject({ message: 'Please provide a valid product_id.' });
            resolve(productDetails);
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    }));
};
exports.getSingleProduct = getSingleProduct;
