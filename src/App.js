import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: "This is Ems Todo List",
      todo: [
      ],
      addTask: '',
    };
  }

  changeList = event => {
    this.setState({[event.target.name] : event.target.value})
  }

  buttonClick = e => {
    const todo = this.state.todo;
    const addTask = {
      name: this.state.addTask,
      id: this.state.todo.length,
      completed: false,
    };
    todo.push(addTask);
    this.setState({ todo: todo, addTask: '' });
  }



  render() {
    return (
    <div>
      <h1>{this.state.title}</h1>
      <TodoList todo={this.state.todo}/>
      <input name="addTask"
        value={this.state.task}
        placeholder="Add New Task"
        onChange={this.changeList}
        />
      <button onClick={this.buttonClick}>
        Enter
      </button>
    </div>
    )
  }
}

export default App;
