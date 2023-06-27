//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import { createRoot } from "react-dom/client";

const hours = new Date().getHours();
let greet;
let hoursStyle = {
  color: ""
};

if (hours < 12) {
  greet = "Good Morning";
} else if (hours < 18) {
  greet = "Good Afternoon";
  hoursStyle.color = "green";
} else {
  greet = "Good Night";
  hoursStyle.color = "blue";
}

createRoot(document.getElementById("root")).render(
  <div>
    <h1 className="heading" style={hoursStyle}>
      {greet}
    </h1>
  </div>
);
