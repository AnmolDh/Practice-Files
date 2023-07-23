// ensures that jQuery is ready, and then exeutes jQuery Code (if script is not on right place in HTML)
$(document).ready(function () {
    // jQuery Code
})


// no difference b/w selecting single or multiple
$("h1"); // eq to document.querySelector("h1");
$("button"); // eq to document.querySelectorAll("button");


//to get and change css property
console.log($("h1").css("color")); // get
$("h1").css("color", "green"); // set


// add or remove class
$("h1").addClass("big-title"); // add
$("h1").addClass("big-title margin-50"); // add multiple

$("h1").removeClass("big-title"); // remove
$("h1").removeClass("big-title margin-50"); // remove multiple

// check if element has specified class
console.log($("h1").hasClass("big-title"));


// change text/html
$("button").text("don't click me"); // eq to textContent
$("button").html("<em>don't click me</em>"); // eq to innerHTML


// check or set attribute
console.log($("a").attr("href")); // check
$("a").attr("href", "https://youtu.be/xvFZjo5PgG0"); // set


// event listener (click)
$("button").click(function () {
    $("h1").css("color", "purple");
});

// event listener (keydown)
$("input").keydown(function (event) {
    var str = $("h1").text();
    $("h1").text(str + event.key);
});

// event listener (on)
$("h1").on("mouseover", function () {
    $("h1").text("hello");
})


// add element
$("a").before("<h2>there</h2>"); // adds this html before a element
$("a").after("<h3>kuri kuri kuruing</h3>"); // adds this html after a element
$("a").prepend("please "); // adds this html just after opening tag
$("a").append("!!"); // adds this html just before closing tag

// remove element
$("h2").remove();


// show / hide element
$("h1").show(); // shows
$("h1").hide(); // hides
$("h1").toggle(); // toggles

// show /hide (with animations / effects)
$("h1").fadeIn(); // shows with fading animation
$("h1").fadeOut(); // hides with fading animation
$("h1").fadeToggle(); // toggles with fading animation

$("h1").slideDown(); // shows with sliding down animation
$("h1").slideUp(); // hides with sliding up animation
$("h1").slideToggle(); // toggles with sliding down animation

// custom animation / effects
$("h1").animate({ opacity: 0.5 });

// chaining
$("h1").slideUp().slideDown().animate({ opacity: 1 });