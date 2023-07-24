import React from "react";
import { createRoot } from "react-dom/client";

const fName = "Anmol";
const lName = "Dhiman";

createRoot(document.getElementById("root")).render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your ID is {Math.floor(Math.random() * 10000)}</p>
  </div>
);
