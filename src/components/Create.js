import React from "react";
import { useState } from "react";
import firebase from "../utils/firebaseConfig";

const Create = () => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const createQuote = () => {
    const quotesDB = firebase.database().ref("quotesDB");
    const quote = {
      author,
      text,
    };

    quotesDB.push(quote);

    setAuthor("");
    setText("");
  };
  return (
    <div className="create">
      <h4>Déposer une citation</h4>
      <div className="form">
        <input
          type="text"
          placeholder="Votre nom"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder="Votre avis"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      <button onClick={createQuote}>Poster</button>
      </div>
    </div>
  );
};

export default Create;
