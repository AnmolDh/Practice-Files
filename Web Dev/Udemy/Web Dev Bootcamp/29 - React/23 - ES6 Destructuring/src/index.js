// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom/client";
import cars from "./practice";

// import animals, {useAnimals} from "./data";
// const [cat, dog] = animals;
// const [name, makeSound] = useAnimals(cat);
// console.log(name);
// makeSound();

const [honda, tesla] = cars;
const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

console.log(honda);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);
