import mongoose from 'mongoose'


const productsCollection = "Products"

const productSchema = new mongoose.Schema({
    id: {type: String, required: true, max: 100},
    name: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 50},
    features: {type: String, required: true, max:200},
    price: {type: String, required: true},
    keywords: {type: String, required: true},
    url: {type: String, required: true},
    category: {type: String, required: true},
    subcategory: {type: String, required: true}
})


const productModel = mongoose.model(productsCollection, productSchema)

export default productModel