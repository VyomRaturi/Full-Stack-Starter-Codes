import React, { useState } from "react";

function TemperatureInput() {
  const [temperature, setTemperature] = useState("");

  return (
    <div>
      <label>
        Enter temperature:
        <input
          type="text"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />
      </label>
    </div>
  );
}

export default TemperatureInput;
