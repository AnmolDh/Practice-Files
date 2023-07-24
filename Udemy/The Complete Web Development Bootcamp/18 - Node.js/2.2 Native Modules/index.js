const fs = require("fs");

// fs.writeFile("message.txt", "hellp me", function err(err) {
//     if (err) throw err;
//     console.log("ok");
// });


fs.readFile("./message.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});