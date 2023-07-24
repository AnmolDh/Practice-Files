const bodyParser = require("body-parser");
const express = require("express");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");

});

app.post("/", function (req, res) {
    const apiKey = "";
    const units = "metric";
    const query = req.body.cityName;
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;

    https.get(apiURL, function (response) {
        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const city = weatherData.name;
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const iconURL = `https:openweathermap.org/img/wn/${icon}@2x.png`;

            res.write(`<h1>temp in ${city} is ${temp}</h1>`);
            res.write(`<p>the weather is ${description}</p>`);
            res.write(`<img src="${iconURL}">`);
            res.send();
        });
    });
});


app.listen(3000, function () {
    console.log("server started");
});
