"use strict";

/*
const temp1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temp2 = [2, 33, 12, -1];

const calcTempAmp = (t1, t2) => {
  const temps = t1.concat(t2);

  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] === "string") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }

  console.log(max - min);
};

calcTempAmp(temp1, temp2);
*/

/*
const measureKelvin = () => {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degree Celsius:")),
  };
  // console.log(measurement);
  // console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
*/

/*
const printForecast = (temps) => {
  let str = "";
  for (let i = 0; i < temps.length; i++){
    str += `...${temps[i]}C in ${i + 1} days`;
    // str = str.concat(`...${temps[i]}C in ${i + 1} days`);
  }
  console.log(str);
}
printForecast([17, 21, 23]);
*/