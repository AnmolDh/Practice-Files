import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((el, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={el.title}
            content={el.content}
            delete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
