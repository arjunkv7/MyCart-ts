import models from '../models/index'

export let addProduct = (req:any) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = req.body;

            let newProduct = await new models.Products({
                name: data.name,
                price: data.price,
                category: data.category

            }).save();

            resolve(newProduct);
        } catch (error) {
            console.log(error);
            reject(error)
            
        }
    });
}