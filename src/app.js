const express = require('express')
const mongoose = require('mongoose')
const userRouter = require("./routes/users.routers")
const productRouter = require("./routes/products.routers")
const cartRouter = require("./routes/carts.routers")
const handlebars = require("express-handlebars")
const { generateToken, authToken } = require("../utils")
const bodyParser = require('body-parser');
const passport = require('passport');
const initializePassport = require('../src/config/passport.js')
const cookieParser = require('cookie-parser')
const PRIVATE_KEY = "CoderKey"
const app = express()
const port = 8080

app.use(express.json())

initializePassport(passport)
app.use(passport.initialize())
app.set(passport.session())
app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/../views')
app.set('view engine', 'handlebars')

const users = []

app.post('/register', (req, res) => {
    const {name, email, password} = req.body
    const exists = users.find(user => user.email === email)
    if(exists) return res.status(400).send({status: "error", error: "El usuario ya existe"})

    const user = {
        name, email, password
    }
    users.push(user)

    const access_token = generateToken(user)
    res.send({status: "success", access_token})
})

/* app.post('/login', (req, res) => {
    const {email, password} = req.body    
    const user = users.find(user => user.mail === email && user.password === password)
    console.log(user)
    if(!user) return res.status(400).send({status: "error", error:"Credencial inválida"})

    const access_token = generateToken(user)
    res.send({status: "success", access_token})
}) */

app.get("/current", authToken ,(req, res) =>{
    res.send({status: "success", payload: req.user})
    console.log
})

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})



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
    
    
    app.use(express.json());





