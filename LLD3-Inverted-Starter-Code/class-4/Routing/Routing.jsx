import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams, Navigate } from "react-router-dom";
function Routing() {
  return (
    <div
      style={{
        textAlign: "center",
        marginLeft: "50vw",
      }}
    >
      <h2>Routing Example</h2>
      <nav>
        <ul>{/* Add the Links here */}</ul>
      </nav>
      <Routes>{/* Incldue the Routes here */}</Routes>
    </div>
  );
}

function About() {
  return (
    <>
      <h2>About Page</h2>
      <Routes>
        <Route path="company" element={<Company />}>
          {" "}
        </Route>
        <Route path="founders" element={<Founder></Founder>}>
          {" "}
        </Route>
      </Routes>
    </>
  );
}
function Company() {
  return <h4> We are a good firm</h4>;
}
function Founder() {
  return <h4> We are Nice People </h4>;
}

function Users(props) {
  // extract the props here

  let [user, setUser] = useState(null);
  console.log("46", params);
  // https://fakestoreapi.com/users/2
  useEffect(() => {
    // data fetching from the api
  }, []);
  return (
    <>
      {user == null ? (
        <h3>...loading</h3>
      ) : (
        <>
          <h4>User Name: {user.username}</h4>
          <h3> Name: {user.name.firstname + " " + user.name.lastname}</h3>
          <h4> Phone: {user.phone}</h4>
        </>
      )}
    </>
  );
}

function Home() {
  return <h3>I am Home Page</h3>;
}
function Listing() {
  return <h3>I am Listing Page</h3>;
}

function PageNotFound() {
  return <h3>Page Not found</h3>;
}

export default Routing;
