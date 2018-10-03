import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    let firstItem = {
      task: "Write to-do list",
      id: Date.now(),
      completed: false
    };

    this.state.list = [firstItem];
    this.state.newItem = "";
  }
  
  render() {
    return (
      <div className="app">
        <h1>To-Do List: MVP</h1>
        <TodoList todoList={this.state.list} />
        <TodoForm text={this.state.newItem} />
      </div>
    );
  }
}

export default App;