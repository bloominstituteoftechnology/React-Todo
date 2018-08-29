import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      id: Date.now(),
      completed: false,
      inputText: "",
    };
  }

  addTodo = event => {
    event.preventDefault();
    if (this.state.inputText){
      this.setState({
        id: Date.now(),
        todos: [...this.state.todos, {inputText: this.state.inputText, completed: this.state.completed, id: this.state.id}],
        inputText: '',
      });
    }
  };

  clearTodos = event => {
    if (this.state.inputText){
      this.setState({
        id: Date.now(),
        todos: [],
        inputText: '',
      });
    }
  }

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
