require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const md5 = require("md5");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/authDB");

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model("user", userSchema);


app.get("/", function (req, res) {
    res.render("home");
});

app.get("/register", function (req, res) {
    res.render("register");
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.post("/register", function (req, res) {
    const user = new User({
        email: req.body.username,
        password: md5(req.body.password)
    });
    user.save().then(function () {
        res.render("secrets");
    }).catch(function (err) {
        console.log(err);
    });
});

app.post("/login", function (req, res) {
    User.findOne(
        { email: req.body.username }
    ).then(function (r) {
        if (r) {
            if (r.password === md5(req.body.password)) {
                res.render("secrets");
            }
            else {
                console.log("wrong password");
            }
        }
        else {
            res.redirect("/register");
        }
    }).catch(function (err) {
        console.log(err);
    });
});


app.listen(3000, function () {
    console.log("server started at 3000");
})