import React, { Component } from 'react';
import TodoList from './TodoList';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      todos: []
    };
    this.updateNewTodo = this.updateNewTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  updateNewTodo(event) {
    this.setState({ newTodo: event.target.value });
  }

  addTodo(event) {
    event.preventDefault();
    this.setState({
      newTodo: '',
      todos: this.state.todos.concat(this.state.newTodo)
    });
  }

  onClick(index) {
    const removedTodo = this.state.todos.slice();
    removedTodo.splice(index, 1);
    this.setState({ todos: removedTodo });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.addTodo}>
          <input 
            onChange={this.updateNewTodo}
            placeholder="today, i will..."
            value={this.state.newTodo}
            id="textbox"
          />
          <input type="submit" value="+" />
        </form>
        <TodoList todos={this.state.todos}  onClick={() => this.onClick(this)} />
      </div>
    );
  }
}


export default TodoForm;