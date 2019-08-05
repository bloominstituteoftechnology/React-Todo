import React from 'react';
import Todo from "./components/TodoComponents/Todo.jsx";
import "./index.css";
class App extends React.Component {

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <Todo />
      </div>
    );
  }
}

export default App;
