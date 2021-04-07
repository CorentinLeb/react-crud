import React, { useState } from "react";
import firebase from "../utils/firebaseConfig";

const UpdateDelete = ({item}) => {
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
  return (
    <li>
      {update === false && (
        <div className="item-container">
          <p>"{item.text}"</p>
          <h6>{item.author}</h6>
        </div>
      )}
    </li>
  );
};

export default UpdateDelete;
