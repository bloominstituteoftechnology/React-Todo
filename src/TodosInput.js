import React, { Component } from 'react';
import TodosList from './TodosList';

class TodosInput extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      todo: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ todo: event.target.value });
  };

  addTodo = (event) => {
    event.preventDefault();
    const newTodo = this.state.todos; // copy of current state

    newTodo.push(this.state.todo);
    this.setState({
      todos: newTodo,
      todo: ''
    });
  };

  


  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.handleInputChange} placeholder="Add Todo" value={this.state.todo} />
        </form>
        {this.state.todos.map(todo => <TodosList prop={todo} />)}
    </div>
  )
}
}

export default TodosInput;