import productModel from '../models/products.model.js'

export default class Product {
    getProducts = async() =>{
        try {
            let result = await productModel.findOne()
            return result()
        } catch (error) {
            console.log(error)
            return null
        }
    }
    getProductsById = async(id) =>{
        try {
            let result = await productModel.findOne({_id: id})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
    createProducts = async(product) =>{
        try {
            let result = await productModel.create(product)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
    addProduct = async(id, product) =>{
        try {
            let result = await productModel.updateOne({_id: id},{$set:product})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

}