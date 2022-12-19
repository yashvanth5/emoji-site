import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😊": "smiling",
  "😟": "worried",
  "😎": "cool",
  "😑": "annoyance",
  "👿": "demon",
  "🤔": "thinking ",
  "😂": "laughing",
  "🤯": "mind blown",
  "😴": "sleeping",
  "😷": "sick"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState(
    "Interpretation of emoji will come here"
  );

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>What's that Emoji?</h1>

      <input className="input-colors" onChange={emojiInputHandler}></input>
      <div className="output-end">{meaning}</div>
      <h3>emoji we know </h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              backgroundColor: "orange",
              padding: "0.5rem",
              cursor: "Pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
