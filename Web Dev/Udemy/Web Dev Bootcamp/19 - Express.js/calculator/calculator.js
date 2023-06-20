const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("the result is " + result);
});

app.get("/bmiCalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
    var weight = req.body.weight;
    var height = req.body.height;

    var bmi = (weight / (Math.pow((height / 100), 2))).toFixed(2);
    res.send("Your BMI is " + bmi);
});

app.listen(3000, function () {
    console.log("server started");
});