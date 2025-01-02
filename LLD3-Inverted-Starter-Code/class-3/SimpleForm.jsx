import React, { useState } from "react";

const SimpleForm = () => {
  // Initializing state for form inputs
  const [name, setName] = useState("");

  // Handler for form submission
  const handleSubmit = (event) => {};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
