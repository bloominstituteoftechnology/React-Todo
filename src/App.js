import React, { Component } from "react";

class TodoApp extends Component {
  constructor(){
    super();
    this.state = {
      task: "",
      id: "",
      completed:"",
      chars:""
    };
  };


  handleAddTodo = e => {
    this.setState({[e.target.todo]: e.target.value})
  };

  handleSubmitTodo = () => {
    const chars = this.state.chars;
    const task = {todo: this.state.task, id: this.state.task + chars.length};
    chars.push(task);
    this.setState({chars: chars, task:""})
  }

  render() {
    return (
      <div>
      <input 
        task="task" 
        onChange={this.handleAddTodo}
        value={this.state.task}
        placeholder="Add new ToDo"
      />
      <button onClick={this.handleSubmitTodo}>Add Todo</button>
      </div>
    );
  };
};



const App = () => (
  <div>
    <h2>Todo App</h2>
    <TodoApp />
  </div>
);

export default App;
