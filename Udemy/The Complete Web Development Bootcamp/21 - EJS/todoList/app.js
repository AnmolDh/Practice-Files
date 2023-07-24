const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));


const Items = ["default item"];
const workItems = [];

app.get("/", function (req, res) {
    const day = date.getDate();
    res.render("list", { listTitle: day, newListItems: Items });
});

app.post("/", function (req, res) {
    newItem = req.body.newItem;

    if (req.body.list === "WORK") {
        workItems.push(newItem);
        res.redirect("/work");
    }
    else {
        Items.push(newItem);
        res.redirect("/");
    }
});


app.get("/work", function (req, res) {
    res.render("list", { listTitle: "WORK", newListItems: workItems });
});

app.listen(3000, function () {
    console.log("server started at 3000");
});