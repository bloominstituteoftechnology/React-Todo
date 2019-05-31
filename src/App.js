import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const list = [];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      TodoList: list,
      task: "",
    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  addTodoHandler = event => {
    event.preventDefault();
    let newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todoList: [...this.state.todoList, newTodo],
      task: "",
    })
  }

  toggleTodo = (e, taskId) => {
    let newTodoList = this.state.todoList.map(task => (task.id === this.setState({
      todoList: newTodoList
    })
  
  deleteCompletedHandler = e => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(task => !task.completed)
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="container">
        <h2>ToDo List!</h2>
        <TodoList todoList={this.state.todoList} toggleTodo={this.toggleTodo} />
        <TodoForm task={this.state.task} changeHandler={this.changeHandler} addTodoHandler={this.addTodoHandler} deleteCompletedHandler={this.deleteCompletedHandler} />
      </div>
    );
  }
}

export default App;
