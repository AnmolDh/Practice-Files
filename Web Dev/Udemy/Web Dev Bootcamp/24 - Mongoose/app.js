const mongoose = require("mongoose");

//  connect to MongoDB using mongoose
mongoose.connect("mongodb://localhost:27017/fruitsDB");

// define a schema
const fruitSchema = new mongoose.Schema({
    // adding validation
    name: {
        type: String,
        required: [true, "no name specified"]
    },
    score: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

// using the defined schema to create collection
const Fruit = mongoose.model("Fruit", fruitSchema);

// creating document
const fruit = new Fruit({
    name: "Apple",
    score: 8,
    review: "Solid as a Fruit."
});

// saving the document to the DB
// fruit.save();


// creating more fruits
const kiwi = new Fruit({
    name: "Kiwi",
    score: 7,
    review: "Pretty Goofy"
});

const orange = new Fruit({
    name: "Orange",
    score: 6,
    review: "too much of juice"
});

const banana = new Fruit({
    name: "Banana",
    rating: 8,
    review: "Prettty Longg"
});

// inserting multiple documents
// Fruit.insertMany([kiwi, orange, banana]);


// log all documents from a collection
// const queryAll = Fruit.find({});

// queryAll.exec().then(function (fruits) {
//     console.log(fruits);
//     // closes the connection with DB
//     mongoose.connection.close();
// }).catch(function (err) {
//     console.log(err);
// });


// log just value of name from document
// queryAll.exec().then(function (fruits) {
//     fruits.forEach(function (e) {
//         console.log(e.name);
//     });
// }).catch(function (err) {
//     console.log(err);
// });


// update value in a document
// Fruit.updateOne({ _id: "649408e3a44781d8fba55111" }, { name: "Peach" })
// .then(function () {
//     mongoose.connection.close();
// })
// .catch(function (err) {
//     console.log(err);
// });


// delete document from a collection
// Fruit.deleteOne({ name: "Orange" })
// .then(function () {
//     mongoose.connection.close();
// })
// .catch(function (err) {
//     console.log(err);
// });



// relation bw two collections
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("person", personSchema);

const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: kiwi
});
// person.save();


// update and add favFruit...
Person.updateOne({ name: "John" }, { favouriteFruit: banana })
.then(function () {
    mongoose.connection.close();
}).catch(function (err) {
    console.log(err);
});