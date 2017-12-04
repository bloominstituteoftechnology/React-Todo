import React, { Component } from 'react';
import TodoList from './TodoList';

  class Todo  extends Component {
    constructor() {
      super();
      this.state = {
      tasks: [],
      newTask: '',
      };
    }

    handleTaskInput = event => {
      let n = event.target.value;
      this.setState({ newTask: n });

    };

    addTodo = event => {
      event.preventDefault();
      const tasksList = this.state.tasks;
      tasksList.push(this.state.newTask);
      this.setState({
        tasks: tasksList,
        newTask: '',
      });
    };

    render() {
      return (
        <div>
          <div><h3>Todo List</h3></div>
          {this.state.tasks.map(item => (
            <TodoList task = {item} />
            ))}
          <form>
            <h3>Enter a New Task On Your To-Do List</h3>
            <input type = "text" placeholder = "please enter a new task" value ={this.state.newTask} onChange = {this.handleTaskInput} />
            <button type = "submit" value = "Submit" onClick = {this.addTodo}>Submit</button>
          </form>
        </div>
      );
    }
  }

export default Todo;
