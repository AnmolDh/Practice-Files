import React from "react";
import { createRoot } from "react-dom/client";

const customStyle = {
  color: "green",
  fontSize: "2rem"
};

customStyle.color = "blue";

createRoot(document.getElementById("root")).render(
  <div>
    <h1 style={{ color: "red" }}>Hello World!</h1>
    <p style={customStyle}>hue hue</p>
  </div>
);
