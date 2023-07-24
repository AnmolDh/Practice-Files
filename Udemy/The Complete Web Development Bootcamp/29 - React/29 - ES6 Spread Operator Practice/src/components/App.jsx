import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleInput(event) {
    const { value } = event.target;
    setInput(value);
  }

  function add() {
    setItems((prevItems) => {
      return [...prevItems, input];
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={input} />
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
