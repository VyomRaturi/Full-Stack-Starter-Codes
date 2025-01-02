import React from "react";
import useVisibility from "./useVisibility";
import Modal from "./Modal";

function App() {
  return (
    <div className="App">
      <h1>Custom Hook Example</h1>
      <button>Show Modal</button>
      <button>Toggle Modal</button>
      <Modal />
    </div>
  );
}

export default App;
