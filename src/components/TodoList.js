import React, { Component } from 'react';
import Todo from './Todo.js';

class updateTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
  }
  handleTodoInput = event => {
    this.setState({ newTodo: event.target.value });
  };
  addTodo = event => {
    event.preventDefault();
    const updateTodos = this.state.todos;
    updateTodos.push(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: updateTodos
    });
  };
  render() {
    return (
      <div>
        {this.state.todos.map((todo, i) => <Todo key={i} item={todo} />)}
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            onChange={this.handleTodoInput}
            placeholder="Add a new Todo"
            value={this.state.newTodo}
          />
        </form>
      </div>
    );
  }
}
export default updateTodos;
