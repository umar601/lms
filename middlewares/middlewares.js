
const path = require("path");
const express = require("express");
const passport = require("passport");
const passportLocal = require("passport-local");
const session = require("express-session");
const student = require("../models/studentmodel")


function configureMiddlewares(app){

    app.set("views",path.join(__dirname,"../views"));

    app.set("view engine","ejs");

    app.use(express.static(path.join(__dirname,"../public")));

    app.use(express.urlencoded({extended:true}));


    app.use(session({
        secret:"secret",
        resave:true,
        saveUninitialized:false,
        cookie:{
            expires:Date.now()*7*24*60*60,
            httpOnly:true

        }
    }))

    app.use(express.json());

    app.use(passport.initialize());
    
    app.use(passport.session());

    passport.use( new passportLocal(student.authenticate()));

    passport.serializeUser(student.serializeUser());

    passport.deserializeUser(student.deserializeUser());
    
    


}


module.exports = configureMiddlewares;