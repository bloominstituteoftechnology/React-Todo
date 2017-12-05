import React, { Component } from 'react';
import Todo from './Todo';

  class TodoList  extends Component {
    constructor() {
      super();
      this.state = {
      todos: [],
      newTask: '',
      };
    }

    handleTaskInput = event => {
      let n = event.target.value;
      this.setState({ newTask: n });

    };

    addTodo = event => {
      event.preventDefault();
      const tasksList = this.state.todos;
      tasksList.push(this.state.newTask);
      this.setState({
        todos: tasksList,
        newTask: '',
      });
    };

    render() {
      return (
        <div>
          <div><h3>Todo List</h3></div>
          {this.state.todos.map((item, i) => (
            <Todo key = {i} index = {i} todo = {item} />
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

export default TodoList;
