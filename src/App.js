import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import './App.css';

 class App extends React.Component {
   constructor() {
    super();
    this.state = {
      todos: [],
      id: Math.random(),
      completed: false,
      inputText: "",
    };
  }

   addTask = event => {
    event.preventDefault();
    if (this.state.inputText){
      this.setState({
        id: Math.random(),
        todos: [...this.state.todos, {inputText: this.state.inputText, completed: this.state.completed, id: this.state.id}],
        inputText: '',
      });
    }
  };
   
   setInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  clearTasks = event => {
    if (this.state.inputText){
      this.setState({
        id: Math.random(),
        todos: [],
        inputText: '',
      });
    }
  }

   render() {
    return (
      <div className = "toDoContainer">
        <h2>To Do List</h2>
        <TodoForm
          addTask={this.addTask}
          inputText={this.state.inputText}
          setInput={this.setInput}
        />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
 }

 export default App;