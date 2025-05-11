import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import TemperatureDisplay from "./TemperatureDisplay";

function App() {
  // Set up shared state for temperature

  return (
    <div>
      <TemperatureInput />
      <TemperatureDisplay />
    </div>
  );
}

export default App;
