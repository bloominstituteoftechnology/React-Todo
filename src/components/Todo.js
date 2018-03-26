import React, { Component } from 'react';

class Todo extends Component {
  constructor() {
    super() 
    this.state = {
      todoList: [],
      newTodo: ""
    }
  }

  addTodo = (event) => {
    event.preventDefault();
    const todos = this.state.todoList;
    todos.push(this.state.newTodo);

    this.setState({
      newTodo: '',
      todoList: todos
    })
  }

  handleNewInput = (event) => {
    this.setState({newTodo: event.target.value});
  }

  render() {
    return (
      <div>
        {this.state.todoList.map(todo => <div>{todo}</div>)}
        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.handleNewInput} placeholder="Add a new Todo!" value={this.state.newTodo} />
        </form>
      </div>
    )
  }
}

export default Todo;