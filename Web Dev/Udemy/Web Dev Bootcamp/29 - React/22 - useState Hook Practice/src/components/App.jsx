import React from "react";

function App() {
  const [time, setTime] = React.useState(
    new Date().toLocaleTimeString("en-GB")
  );

  function currentTime() {
    setTime(new Date().toLocaleTimeString("en-GB"));
  }
  setInterval(currentTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
