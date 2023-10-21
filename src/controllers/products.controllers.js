export const getProducts = async(req, res) => {
     res.send({status: "success", result: "getProducts"})
}

export const getProductsById = async(req, res) => {
    res.send({status: "success", result: "getProductsById"})
}

export const createProducts = async(req, res) => {
    res.send({status: "success", result: "createProducts"})
}

export const addProduct = async(req, res) => {
    res.send({status: "success", result: "addProduct"})
}