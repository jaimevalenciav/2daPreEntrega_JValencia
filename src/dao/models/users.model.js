const mongoose = require('mongoose')

const userCollection = "usuarios"

const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true, max: 100},
    last_name: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 50},
    age: {type: Number, required: true},
    password: {type: String, required: true, max: 100},
    cartId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }, 
    role: {type: String, required: true, default: 'user'}
    
})

const userModel = mongoose.model(userCollection, userSchema)

export default userModel