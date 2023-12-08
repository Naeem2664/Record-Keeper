import "./App.css";
import Todo from "./Todo";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <div className="container-fluid">
        <h1>Todo App</h1>
        <Todo />
      </div>
    </>
  );
}

export default App;
