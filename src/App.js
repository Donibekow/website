import React, { useState } from "react";
// import {Route, Routes, Link} from "react-router-dom"
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <Button variant="light">Light</Button>{" "}
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmda0YGQzWVUbEKRva0CLjI3ADqGV76tYG5gIYgctZrfB8hWfD_i0tgwVQLgeScyPj08s&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
