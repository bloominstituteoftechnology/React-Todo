import React, { Component } from 'react';
import Todo from '../Todo/Todo';

/*CSS Styles */
import './TodoList.css';

class TodoList extends Component {
  constructor() {
    super();

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
    const todoList = this.state.todos;
    todoList.push(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: todoList
    });
  };

  removeTodo = event => {
    const todoList = this.state.todo;
    
  }

  render() {
    return (
      <div>
        {this.state.todos.map((todo, i) => <Todo key={i} todo={todo} />)}
        <form onSubmit={this.addTodo}>
          <input className="input"
            onChange={this.handleTodoInput}
            placeholder="Add a new todo"
            value={this.state.newTodo}
          />
          
        </form>
      </div>
    );
  }
}

export default TodoList;
