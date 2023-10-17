const carts = []

function getAllCarts(req, res){
    res.json(carts)
}

function createCart(req, res){
    const newCart = req.body
    carts.push(newCart)
    res.status(201).json(newCart)
}

module.exports = {
    getAllCarts,
    createCart
}