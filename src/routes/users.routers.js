const express = require('express')
const { userModel } = require('../models/users.model')
const jwt = require('jsonwebtoken')
const { createHash, isValidatePassword} = require('../../utils')
const passport = require('passport')
const router = express.Router ()

router.get("/", async(req, res) => {
    try {
        let users = await userModel.find()
        res.send({result: "success", payload: users})
    } catch (error) {
        console.log(error)
    }
})
router.get("/login", async(req, res) =>{
    res.render("login")
})

router.post("/", async(req, res) => {
    let { nombre, apellido, email} = req.body
    if (!nombre || !apellido || !email) {
        response.send({status: error, error: "Faltan parámetros"})
    }

    let result = await userModel.create({nombre, apellido, email})
    res.send({result: "Success", payload: result})
})

router.put("/:uid", async(req, res) =>{
    let { uid } = req.params

    let userToReplace = req.body
    if(!userToReplace.nombre || !userToReplace.apellido || !userToReplace.email) {
        res.send({status: "error", error: "Faltan parámetros"})
    }
    let result = await userModel.updateOne({_id: uid}, userToReplace)
    res.send({result: "Success", payload: result})
})

router.delete("/:uid", async(req, res) => {
    let uid = req.params
    let result = await userModel.deleteOne({_id: uid})
    res.send({result: "Success", payload: result})
})

router.get("/failregister", (req, res) => {
    console.log("Falla en autenticación")
    res.send({error: "Falla en autenticación"})
})

router.post("/login", (req, res) => {
    const {email, password} = req.body
    
    if(email == "jvalencia@mail.com" && password == "passcoder"){
        let token = jwt.sign({email, password}, "coderSecret", {expiresIn: "24h"})
        res.cookie("coderCookieToken", token, {
            maxAge: 60*60*1000,
            httpOnly: true
        }).send({message: "Logueado exitosamente en el sistema" })
    }else {
        res.render("failregister")
    }
})

router.get("/current", passport.authenticate("jwt", {session: false}), (req, res) =>{
    res.send(req.user) 
})


module.exports = router 