import mongoose from "mongoose";
let Schema = mongoose.Schema;

let productSchema = new Schema({
    name: String,
    price: Number,
    category: String,
    image: String,

}, { timestamps: true });

let Products = mongoose.model('products', productSchema);

export { Products };