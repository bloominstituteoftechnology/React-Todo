import React, { Component } from 'react';
import Todo from './Todo';

  class TodoList  extends Component {
    constructor() {
      super();
      this.state = {
      todos: [],
      newTodo: '',
      };
    }

    handleTaskInput = event => {
      let n = event.target.value;
      this.setState({ newTodo: n });

    };

    addTodo = event => {
      event.preventDefault();
      const tasksList = this.state.todos;
      tasksList.push(this.state.newTodo);
      this.setState({
        todos: tasksList,
        newTodo: '',
      });
    };

    render() {
      return (
        <div>
          {this.state.todos.map((item, i) => (
            <Todo key = {i} index = {i} todo = {item} />
            ))}
          <form>
            <h3>Enter a New Task On Your To-Do List</h3>
            <input type = "text" placeholder = "please enter a new task" value ={this.state.newTodo} onChange = {this.handleTaskInput} />
            <button type = "submit" value = "Submit" onClick = {this.addTodo}>Submit</button>
          </form>
        </div>
      );
    }
  }

export default TodoList;
