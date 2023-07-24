import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }
  function handleDisplayName(event) {
    setDisplayName(name);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleDisplayName}>
      <div className="container">
        <h1>Hello {displayName}</h1>
        <input
          onChange={handleName}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button>Submit</button>
      </div>
    </form>
  );
}

export default App;
