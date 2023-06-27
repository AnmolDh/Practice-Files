import React from "react";
import Entry from "./Entry";
import ep from "../emojipedia";

function createEntry(entry) {
  return (
    <Entry
      key={entry.id}
      name={entry.name}
      meaning={entry.meaning}
      emoji={entry.emoji}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{ep.map(createEntry)}</dl>
    </div>
  );
}

export default App;
