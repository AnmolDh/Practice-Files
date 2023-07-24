const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    const emailAddress = req.body.email;
    const fName = req.body.fName;
    const lName = req.body.lName;


    const data = {
        members: [
            {
                email_address: emailAddress,
                status: "subscribed",
                merge_fields: {
                    FNAME: fName,
                    LNAME: lName
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const url = "https://us21.api.mailchimp.com/3.0/lists/";

    const options = {
        method: "POST",
        auth: ""
    }
    const request = https.request(url, options, function (response) {
        if (response.statusCode !== 200) {
            res.sendFile(__dirname + "/failure.html");
        }


        response.on("data", function (data) {
            if (JSON.parse(data).error_count === 0) {
                res.sendFile(__dirname + "/success.html");
            }
            else {
                res.sendFile(__dirname + "/failure.html");
            }
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
});


app.post("/failure", function (req, res) {
    res.redirect("/");
});


app.listen(3000, function () {
    console.log("server started");
});
