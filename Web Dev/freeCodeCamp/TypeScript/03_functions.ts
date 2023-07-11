function addTwo(num: number): number {
  return num + 2;
  // return "hellp";
}
addTwo(5);

function user(name: string, email: string, isLogged: boolean = false) {}
user("anmol", "blahblah@blah.com");

let getValue = (val: number) => {
  if (val > 5) {
    return true;
  }
  return "200 OK";
}

const heros = ["thor", "spiderman", "batman"];
heros.map((e): string => `hero is ${e}`); // context aware

let consoleError = (err: string): void => {
  console.log(err);
};
let handleError = (err: string): never => {
  throw new Error(err);
};

export { };