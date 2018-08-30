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
      id: Date.now(),
      completed: false,
      inputText: "",
    };
  }

   addTask = event => {
    event.preventDefault();
    if (this.state.inputText){
      this.setState({
        id: Date.now(),
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






  markCompleted = id => {
    let todoSegment = this.state.todos.slice();
    todoSegment = todoSegment.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({todos: todoSegment});
  };

  clearCompleted = event => {
   event.preventDefault();
   let todoSegment = this.state.todos.slice();
    todoSegment = todoSegment.filter(todo => !todo.completed);
   this.setState({ todos: todoSegment });
  };


  clearTasks = event => {
    if (this.state.inputText){
      this.setState({
        id: Date.now(),
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