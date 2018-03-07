import React from "react";
import TodoList from "./components/TodoList";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div className="app" style={styles}>
    <h2>To Do App</h2>
    <List />
  </div>
);

export default App;
