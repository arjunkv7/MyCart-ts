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
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
const auth_1 = require("../middlewares/auth");
const products_1 = require("../controllers/products");
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newProduct = yield (0, products_1.addProduct)(req);
        res.status(200).json(newProduct);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}));
router.put('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let updatedProduct = yield (0, products_1.editProduct)(req);
        res.status(200).json(updatedProduct);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}));
router.get('/', auth_1.userJwtAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let productDetails = yield (0, products_1.getSingleProduct)(req);
        res.status(200).json(productDetails);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}));
exports.default = router;
