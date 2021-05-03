import React, { useState } from "react";
import firebase from "../utils/firebaseConfig";

const UpdateDelete = ({ item }) => {
  const [update, setUpdate] = useState(false);
  const [authorUpdate, setAuthorUpdate] = useState(null);
  const [textUpdate, setTextUpdate] = useState(null);

  const updateItem = () => {
    let quote = firebase.database().ref("quotesDB").child(item.id);
    if (authorUpdate !== null) {
      quote.update({
        author: authorUpdate,
      });
    }
    if (textUpdate !== null) {
      quote.update({
        text: textUpdate,
      });
    }
    setUpdate(false);
  };

  const deleteItem = () => {
    let quote = firebase.database().ref('quotesDB').child(item.id);

    quote.remove();
  }
  return (
    <li>
      {update === false && (
        <>
          <div className="item-container">
            <p>"{item.text}"</p>
            <h6>{item.author}</h6>
          </div>
          <div className="button-container">
            <button onClick={() => setUpdate(!update)}>Modifier</button>
            <button onClick={deleteItem}>Supprimer</button>
          </div>
        </>
      )}

      {
        update &&
        <>
        <div className="item-container-update">
          <textarea
          defaultValue={item.text}
          onChange={(e) => setTextUpdate(e.target.value)}
          />
          <input
          type="text"
          defaultValue={item.author}
          onChange={(e) => setAuthorUpdate(e.target.value)}
          />
          <button onClick={updateItem}>Validate Update</button>
        </div>
      </>
      }
    </li>
  );
};

export default UpdateDelete;
