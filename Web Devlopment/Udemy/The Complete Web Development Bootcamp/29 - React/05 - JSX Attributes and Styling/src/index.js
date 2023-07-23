import React from "react";
import { createRoot } from "react-dom/client";

const img = "https://picsum.photos/200";

createRoot(document.getElementById("root")).render(
  <div>
    <h1 className="heading">My Favourite Cats</h1>
    <div>
      <img className="img" src={img + "?grayscale"} alt="random" />
      <img
        className="img"
        src="https://media.wired.com/photos/5e1e646743940d0008009167/1:1/w_1533,h_1533,c_limit/Science_Cats-84873657.jpg"
        alt="angry cat"
      />
    </div>
  </div>
);
