import React, { Component } from 'react';
import TodoList from "./Components/Todolist";
//import Done from "./Components/Done";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h2>Todo App</h2>
    <TodoList />
  </div>
);

export default App;
