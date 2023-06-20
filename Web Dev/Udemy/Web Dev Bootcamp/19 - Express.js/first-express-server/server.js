import express from "express";
const app = express();

app.get("/", function (request, response) {
    response.send("<h1>Hello</h1>");
});

app.get("/contact", function (req, res) {
    res.send("<h1>Contact Me</h1>");
});

app.get("/about", function (req, res) {
    res.send("<h1>huh</h1>");
});

app.listen(3000, function () {
    console.log("Server started on Port 3000");
});