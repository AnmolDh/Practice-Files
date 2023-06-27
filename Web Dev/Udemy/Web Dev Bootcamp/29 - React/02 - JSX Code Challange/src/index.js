//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <div>
    <h1>Hello</h1>
    <ul>
      <li>Hey</li>
      <li>Hi</li>
      <li>Bye</li>
    </ul>
  </div>
);
