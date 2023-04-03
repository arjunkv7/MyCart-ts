import express, { request,response}  from "express";
let router = express.Router();
import {addProduct} from '../controllers/products'

router.post('/', async (req,res) => {
    try {
        let newProduct = await addProduct(req);
        res.status(200).json(newProduct);
    } catch (err:any) {
        console.log(err);
        res.status(400).send(err.message);
        
    }
});

export default router;