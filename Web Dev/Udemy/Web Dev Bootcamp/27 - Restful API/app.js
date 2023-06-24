const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("article", articleSchema);


app.route("/articles")
.get(function (req, res) {
    Article.find({}).then(function (r) {
        res.send(r);
    }).catch(function (err) {
        res.send(err);
    });
})
.post(function (req, res) {
    const article = new Article({
        title: req.body.title,
        content: req.body.content
    });

    article.save().then(function (r) {
        res.send(r);
    }).catch(function (err) {
        res.send(err);
    });
})
.delete(function (req, res) {
    Article.deleteMany({}).then(function () {
        res.send("database destroyed!!");
    }).catch(function (err) {
        res.send(err);
    });
});


app.route("/articles/:reqArticles")
.get(function (req, res) {
    Article.findOne({ title: req.params.reqArticles }).then(function (r) {
        res.send(r);
    }).catch(function (err) {
        res.send(err);
    })
})
.put(function (req, res) {
    Article.replaceOne(
        { title: req.params.reqArticles },
        { title: req.body.title, content: req.body.content }
    ).then(function (r) {
        res.send(r);
    }).catch(function (err) {
        res.send(err);
    });
})
.patch(function (req, res) {
    Article.updateOne(
        { title: req.params.reqArticles },
        {$set: req.body}
    ).then(function (r) {
        res.send(r);
    }).catch(function (err) {
        res.send(err);
    })
})
.delete(function (req, res) {
    Article.deleteOne(
        { title: req.params.reqArticles }
    ).then(function (r) {
        res.send(r);
    }).catch(function (err) {
        res.send(err);
    })
});


app.listen(3000, function () {
    console.log("server started at 3000");
})