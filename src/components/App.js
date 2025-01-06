import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  // State to manage whether the paragraph is visible or not
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  // Function to handle button click
  const handleClick = () => {
    setIsParagraphVisible(true); // Set paragraph visibility to true when clicked
  };

  return (
    <div id="main">
      {/* Button to trigger the paragraph rendering */}
      <button id="click" onClick={handleClick}>
        Click me
      </button>

      {/* Conditional rendering of paragraph */}
      {isParagraphVisible && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.
        </p>
      )}
    </div>
  );
}

export default App;
/*

import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  return (
    <div id="main">
      // Do not alter the main div
    </div>
  );
}


export default App;
*/