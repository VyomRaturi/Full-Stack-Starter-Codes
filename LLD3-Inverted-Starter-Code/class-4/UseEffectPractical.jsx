import React, { useState, useEffect } from "react";

function FetchDataComponent() {
  const [data, setData] = useState(null);

  // use this api to fetch data: "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {}, []);

  return <div>{data ? <p>Data loaded!</p> : <p>Loading...</p>}</div>;
}
