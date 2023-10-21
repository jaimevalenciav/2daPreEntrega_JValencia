export const getUsers = async(req, res) =>{
    res.send({status: "success", result: "GetUsers"})
}

export const getUserById = async(req, res) =>{
    res.send({status: "success", result: "GetUserById"})
}
 
export const saveUser = async(req, res) =>{
    res.send({status:"success", result: "SaveUser"})
}