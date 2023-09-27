const express = require('express')
const mongoose = require('mongoose')
const userRouter = require("./routes/users.routers")
const productRouter = require("./routes/products.routers")
const cartRouter = require("./routes/carts.routers")
const app = express()
const port = 8080


app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})

app.use(express.json())

mongoose.connect('mongodb+srv://jaimevalenciav:Infoadmin08@ecommerce.rt5ptyc.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("Conectado a la base de datos de MongoDB")
    })
    .catch(error => {
        console.log("Error en la conexión ", error)
    });

    app.use("/api/users", userRouter);
    app.use("/api/products", productRouter);
    app.use("/api/carts", cartRouter);






