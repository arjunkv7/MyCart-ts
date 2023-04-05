import models from '../models/index'

export let addProduct = (req: any) => {
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

export let editProduct = (req: any) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { product_id } = req.body;
            let data = req.body;
            let updatedProduct = await models.Products.findByIdAndUpdate(product_id, {
                name: data.name,
                price: data.price,
                category: data.category
            }, { new: true });

            if (!updatedProduct) return reject({ message: 'Please provide a valid product_id' });

            resolve(updatedProduct);
        } catch (error) {
            console.log(error);
            reject(error);

        }
    });
}

export let getSingleProduct = (req:any) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { product_id } = req.query;
            let productDetails = await models.Products.findById(product_id);

            if(!productDetails) return reject({ message: 'Please provide a valid product_id.'});

            resolve(productDetails);

        } catch (error) {
            console.log(error);
            reject(error);
            
        }
    });
}