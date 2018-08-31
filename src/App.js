import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import './components/TodoComponents/Todo.css';


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
    if (this.state.inputText){
      this.setState({
        todos: [...this.state.todos, {
          task: this.state.inputText,
          completed: false,
          id: Date.now().toString(),
          classes: [],
        }],
        inputText: '',
      }, () => {
        console.log(this.state);
      });
    }
  };

  clearTodos = event => {
    event.preventDefault();

    let newState = {...this.state};

    newState.todos = newState.todos.filter(todoItem => todoItem.completed === false);

    this.setState({...newState});
  }

  handleInput = event => {
    this.setState({
      inputText: event.target.value,
    });
  };

  toggle = event => {
    event.preventDefault();

    let newState = {...this.state};


    for (let i = 0; i < newState.todos.length; i++) {
      if (newState.todos[i].id === event.target.id) {
        if (newState.todos[i].classes.includes("completed")) {
          newState.todos[i].classes = newState.todos[i].classes.filter(classItem => classItem !== "completed");
        } else {
          newState.todos[i].classes.push("completed");
        }
        newState.todos[i].completed = !newState.todos[i].completed;
      }
    }

    // console.log(event.target.id)
    this.setState({...newState});
  };

  render() {
    return (
      <div>
        <TodoList 
          todos={this.state.todos} 
          toggle={this.toggle}
          // key={this.state.todos.id}
        />
        <TodoForm
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
          clearTodos={this.clearTodos}
        />
        <button onClick={this.toggle}>click here</button>
      </div>

    );
  }
}

export default App;
