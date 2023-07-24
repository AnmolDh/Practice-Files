import React from "react";
import { createRoot } from "react-dom/client";
import pi, { doublePi, triplePi } from "./math";

createRoot(document.getElementById("root")).render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>
);
