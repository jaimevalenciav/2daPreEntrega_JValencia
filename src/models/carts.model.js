const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')


const cartCollection = "carts"

const cartSchema = new mongoose.Schema({
    products: {
        type: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "product"
                },
                id: { type: String, required: true},
                quantity: { type: Number, default: 1}
            }
        ],
        default: []
    }
})
cartSchema.plugin(mongoosePaginate)
const cartModel = mongoose.model(cartCollection, cartSchema)

module.exports = { cartModel }