import React, { Component } from 'react';
import TodoList from "./components/TodoList.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title:"Things To Do",
      todos: [],
      newTodo: ""
    };
  }

  handleSubmitTodo = () => {
    const {todos} = this.state;
    todos.push(this.state.newTodo);
    this.setState({ todos, newTodo: "" });
  };

  handleNewTodo = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render () {
    console.log("rendering");
    return (
      <div>
	<h1>{this.state.title}</h1>
	<TodoList todos={this.state.todos} />
	<input
	  name="newTodo"
	  onChange={this.handleNewTodo}
	  value={this.state.newTodo}
	  placeholder="add todo here"
	  />
	<button onClick={this.handleSubmitTodo}>Add</button>
      </div>
    );
  };
};
      
      
export default App;
