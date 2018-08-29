import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import Todo from "./components/TodoComponents/Todo";

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
        todos: [...this.state.todos, this.state.inputText],
        inputText: ""
      });
    }
  };

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