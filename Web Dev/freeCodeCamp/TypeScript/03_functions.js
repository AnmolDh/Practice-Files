function addTwo(num) {
    return num + 2;
    // return "hellp";
}
addTwo(5);
function user(name, email, isLogged) {
    if (isLogged === void 0) { isLogged = false; }
}
user("anmol", "blahblah@blah.com");
var getValue = function (val) {
    if (val > 5) {
        return true;
    }
    return "200 OK";
};
var heros = ["thor", "spiderman", "batman"];
heros.map(function (e) { return "hero is ".concat(e); }); // context aware
var consoleError = function (err) {
    console.log(err);
};
var handleError = function (err) {
    throw new Error(err);
};
