import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ' '
    };
  }

  handletaskInput = (event) =>  {
    this.setState({
      newTodo: event.target.value
    });
  }

  addTodo = (event) => {
    event.preventDefault();
    const todoList = this.state.todos;
    todoList.push(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: todoList
    })
  }

  render() {
    return (
      <div>
        {this.state.todos.map((task, i) => <Todo todo={task} />)}
        <form onSubmit={this.addTodo}>
          <input onChange={this.handletaskInput} placeholder="Add a new task" value={this.state.newTodo} />
        </form>
      </div>
    );
  }
};

export default TodoList;