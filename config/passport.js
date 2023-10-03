const passport = require('passport')
const local = require('passport-local')
const userService = require("./models/user")
const { createHash, isValidatePassword } = require("./../utils")
const jwt = require('passport-jwt')

const localStrategy = local.strategy

const cookieExtractor = req => {
    let token = nullif (req && req.cooies){
        token = req.cookies["coderCokkieToken"]
    }
    return token
}

const JWTStrategy = jwt.Strategy
const ExtractJWT = jwt.ExtractJWT

const initializePassport = () =>{
    passport.use("jwt", new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: "CoderSecret"
    }, async(jwt_payload, done) => {
        try {
            return done(null, jwt_payload)
        } catch (error) {
            return done(error)
        }
    }
    ))
}

module.exports = initializePassport