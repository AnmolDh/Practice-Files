// selectors
document.firstElementChild.lastElementChild.firstElementChild;

document.getElementsByTagName("li"); // selects all elements with li tag
document.getElementsByTagName("li")[2].style.color = "purple"; // set color of 3rd list element to purple
document.getElementsByTagName("li").length; // total numbers of li elements
document.getElementsByClassName("btn"); // select all elements with btn class
document.getElementById("link"); // selects element with link id
document.getElementById("third").innerHTML = "Last";

document.querySelector("#list a"); // can select tag, class, id and only get first element that satisfies
document.querySelectorAll("#list .items"); // same as above and can select all elements that satisfies

document.querySelector("#list a").style.color = "black";

document.querySelector(".btn").style.backgroundColor = "yellow";


document.querySelector("a").classList.add("invisible"); // adds class to html element
document.querySelector("a").classList.remove("invisible"); // removes class to html element
document.querySelector("a").classList.toggle("invisible"); // adds if not there, and vice versa

document.querySelector("h1").classList.add("huge");

document.querySelector("h1").textContent = "bye"; // change text content only

document.querySelector("h1").innerHTML = "<em>hello</em>"; // change html


document.querySelector("a").attributes; // shows element attributes
document.querySelector("a").getAttribute("href"); // gets attribute value
document.querySelector("a").setAttribute("href", "https://bing.com"); // sets attribute value
