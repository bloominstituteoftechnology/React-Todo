import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";



class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      todos: [],
      inputText: "",
    };
  }

 
  addTodo = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        todos: [...this.state.todos, {task : this.state.inputText, id: Date.now(), completed: false}],
        inputText: "",

      });
    }
  };

  removeTodo = event => {
    event.preventDefault();
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].completed === true) {
        delete(this.todos[i]);
      }
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;
