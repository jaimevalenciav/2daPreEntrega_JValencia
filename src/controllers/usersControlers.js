const users = []

function getAllUsers(req, res){
    res.json(users)
}

function createUser(req, res){
    const newUser = req.body
    carts.push(newUser)
    res.status(201).json(newUser)
}

module.exports = {
    getAllUsers,
    createUser
}