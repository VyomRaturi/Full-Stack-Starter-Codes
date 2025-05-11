import React, { useState, useEffect } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // Use useEffect to update the document title whenever the count changes
  useEffect(() => {}, []); // Dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button>Click me</button>
    </div>
  );
}

export default ExampleComponent;
