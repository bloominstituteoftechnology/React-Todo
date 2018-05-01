import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: {task: "", completed: false},
      todoList: []
    }
  }

  handleChange(eve) {
    this.setState({todo: {task: eve.target.value} });
  }

  handleSubmitTask() {
    let todoAdd = this.state.todoList.push(this.state.todo);
    this.setState({
      todotodoList: todoAdd,
      todo: {task: "", complete: false}
    });
  }

  handleComplete(e) {
    if(e.target.className === "true") {
      e.target.style.textDecoration = "line-through";
    } else {
      e.target.style.textDecoration = "none";
    }
  }

  render() {
    return (
      <div>
        <h2>New Task</h2>
        <p>{this.state.todo.task}</p>
        <input
          name = "todo"
          onChange={this.handleChange.bind(this)}
          value={this.state.todo.task}
          placeholder="Enter a todo task"
        />
        <button
          onClick={this.handleSubmitTask.bind(this)}
        >Add Task</button>
        <Todo todoList={this.state.todoList} complete={this.handleComplete.bind(this)}/>
      </div>

    );
  }
}

export default TodoList;