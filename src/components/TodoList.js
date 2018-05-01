// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {Component} from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      task: "",
      completed: false,
    };
  }
  
  handleTaskChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmitTask = () => {
    const todos = this.state.todos;
    const task = {task: this.state.task, id: this.state.char + todos.length, completed: this.state.completed};
    todos.push(task);
    this.setState({todos: [], task: ""});
  }
  render() {
    return (
      <div>
        <Todo todos={this.state.todos} />
        <input
        name = 'task'
        value = {this.state.task}
        onChange = {this.handleTaskChange}
        />
        <button onClick = {this.handleSubmitTask}>Add Todo</button>
      </div>
    )
  }
}

export default TodoList;