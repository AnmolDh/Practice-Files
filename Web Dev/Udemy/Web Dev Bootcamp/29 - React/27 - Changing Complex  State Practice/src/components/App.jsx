import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleContact(event) {
    const { name, value } = event.target;

    setContact((oldVal) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: oldVal.lName,
          email: oldVal.email
        };
      } else if (name === "lName") {
        return {
          fName: oldVal.fName,
          lName: value,
          email: oldVal.email
        };
      } else if (name === "email") {
        return {
          fName: oldVal.fName,
          lName: oldVal.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleContact}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleContact}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleContact}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
