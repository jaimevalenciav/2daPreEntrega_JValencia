const products = []

function getAllProducts(req, res){
    res.json(products)
}

function createProduct(req, res){
    const newProduct = req.body
    products.push(newProduct)
    res.status(201).json(newProduct)
}

module.exports = {
    getAllProduct,
    createProducts
}