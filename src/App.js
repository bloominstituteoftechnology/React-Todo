import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
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
        todos: [...this.state.todos, {task: this.state.inputText, id: Date.now(), complited: false}],
        inputText: ""
      })
    }
  };

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  removeTodo = event => {
    event.preventDefault();

  }




  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm
          addTodo={this.addTodo}
          removeTodo={this.removeTodo}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
