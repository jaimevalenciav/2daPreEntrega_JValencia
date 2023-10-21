export const getCart = async(req, res) => {
    res.send({status: "success", result: "getCart"})
}

export const getCartById = async(req, res) => {
    res.send({status: "success", result: "getCartById"})
}


export const createCart = async(req, res) => {
    res.send({status: "success", result: "createCart"})
}

export const resolveCart = async(req, res) => {
    res.send({status: "success", result: "resolveCart"})
}
