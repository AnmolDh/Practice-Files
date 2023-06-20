// module.exports = getDate;
// module.exports.getDate = getDate;

exports.getDate = function () {
    const today = new Date();

    const dayOptions = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    
    return today.toLocaleDateString("us-en", dayOptions);
}

exports.getDay = function () {
    const today = new Date();

    const dayOptions = {
        weekday: "long"
    }

    return today.toLocaleDateString("us-en", dayOptions);
}