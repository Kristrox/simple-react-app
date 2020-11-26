import React, { useState, useEffect } from "react";
import "./App.css";
import MyTable from "./App/MyTable";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(null);
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then(function (response) {
          // handle success
          console.log(response.data);
          setUser(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }, 1000);
  }, [counter]);

  return (
    <div className="container">
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <button onClick={() => setCounter((state) => state + 1)}>
        Increment
      </button>
      <MyTable />
      {user ? (
        <>
          <h3>User info</h3>
          <h6>{user.id}</h6>
          <h6>{user.userId}</h6>
          <h6>{user.title}</h6>
          <h6>{user.completed}</h6>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
