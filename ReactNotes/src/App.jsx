import React, { useState } from "react";
import NotesList from "./Components/NotesList";
import { constNotes } from "./constants";
import { nanoid } from "nanoid";

const App = () => {
  // const [notes, setNotes] = useState([constNotes]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...constNotes, newNote];
    // setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesList notes={constNotes} handleAddNote={addNote} />
    </div>
  );
};

export default App;
