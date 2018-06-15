import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import './components/TodoComponents/Todo.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      title: "The Todo List",
      todo: [
      ],
      addTask: '',
    };
  }

  changeList = event => {
    this.setState({[event.target.name] : event.target.value})
  }

  buttonClick = event => {
    event.preventDefault();
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
      <h1 className="title-header">{this.state.title}</h1>
      <input name="addTask"
        value={this.state.task}
        placeholder="Add New Task"
        onChange={this.changeList}
        />
      <button onClick={this.buttonClick}>
        Enter
      </button>
      <TodoList todo={this.state.todo}/>
    </div>
    )
  }
}

export default App;
