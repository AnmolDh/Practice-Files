import React from "react";
import Login from "./Login";

const isLogged = false;
const hour = new Date().getHours();

function App() {
  return (
    <div>
      <div className="container">{isLogged ? <h1>Hello</h1> : <Login />}</div>
      {hour > 18 && <h1>Why are you working so late?</h1>}
    </div>
  );
}

export default App;
