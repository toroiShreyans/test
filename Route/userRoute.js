const { Router } = require("express");
const express = require("express");
const {
    Adduser 
} = require("../Controllers/userController");
const Auth = require("../Middleware/auth");

const route = express.Router();

route.post("/user", Adduser);

module.exports = route;