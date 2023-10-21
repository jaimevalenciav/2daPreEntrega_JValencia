const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const productsCollection = "products"

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

productSchema.plugin(mongoosePaginate)
const productModel = mongoose.model(productsCollection, productSchema)

module.exports = { productModel }