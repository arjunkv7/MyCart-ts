import express, { request,response}  from "express";
let router = express.Router();
import { userJwtAuth } from '../middlewares/auth'
import {addProduct, editProduct, getSingleProduct} from '../controllers/products'

router.post('/', async (req,res) => {
    try {
        let newProduct = await addProduct(req);
        res.status(200).json(newProduct);
    } catch (err:any) {
        console.log(err);
        res.status(400).send(err.message);
        
    }
});

router.put('/', async (req,res) => {
    try {
        let updatedProduct = await editProduct(req);
        res.status(200).json(updatedProduct);
    } catch (err:any) {
        console.log(err);
        res.status(400).send(err.message);
        
    }
});

router.get('/', userJwtAuth, async (req,res) => {
    try {
        let productDetails = await getSingleProduct(req);
        res.status(200).json(productDetails);
    } catch (err:any) {
        console.log(err);
        res.status(400).send(err.message);
        
    }
});

export default router;