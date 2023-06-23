const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/todoDB");

const itemSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model("item", itemSchema);

const item1 = new Item({
  name: "Hello"
});
const item2 = new Item({
  name: "Do this"
});
const item3 = new Item({
  name: "Do that"
});

const defaultArr = [item1, item2, item3];


const listSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema]
})

const List = mongoose.model("list", listSchema);


app.get("/", function (req, res) {
  Item.find({}).exec().then(function (item) {
    if (item.length === 0) {
      Item.insertMany(defaultArr).catch(function (err) {
        console.log(err);
      });
      res.redirect("/");
    }
    else {
      res.render("list", {listTitle: "TODO List", newListItems: item });
    }  
  });
});



app.get("/:customList", function (req, res) {
  const customList = _.capitalize(req.params.customList);
  List.findOne({ name: customList }).then(function (resultList) {
    if (!resultList) {
      const list = new List({
        name: customList,
        items: defaultArr
      });
      list.save();
      res.redirect("/" + customList);
    }
    else {
      res.render("list", { listTitle: customList, newListItems: resultList.items });
    }
  })
});



app.post("/", function(req, res){
  const itemName = req.body.newItem;
  const listName = req.body.list;
  
  const itemPush = new Item({
    name: itemName
  });

  if (listName === "TODO List") {
    itemPush.save();
    res.redirect("/");
  }
  else {
    List.findOne({ name: listName }).then(function (resultList) {
      resultList.items.push(itemPush);
      resultList.save();
      res.redirect("/" + listName);
    })
  }
});



app.post("/delete", function (req, res) {
  const checkbox = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "TODO List") {
    Item.findByIdAndDelete(checkbox).then(function () {
      res.redirect("/");
    });
  }
  else {
    List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: checkbox } } }).then(function () {
      res.redirect("/" + listName);
    });
  }
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
