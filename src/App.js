import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      todos: [],
      inputText: ""
    };
  }


  addTodo = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        todos: [...this.state.todos, {task: this.state.inputText, id: Date.now(), completed: false}],
        inputText: ""
      });
    }
  };

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  //.slice() to create a new array so you don't change the state
  // Set todo equal to .map

  todoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompleted = e => {
    e.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };
  
  render() {
    return (
      <div>
        <TodoList todo4={this.state.todos} 
          handleComplete={this.todoComplete}
        />
        <TodoForm
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
          handleClearTodos={this.clearCompleted}
        />
      </div>
    );
  }
}


export default App;