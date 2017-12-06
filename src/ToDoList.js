import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      toDos: [],
      newTodo: ''
    };
  }

  handlenewTodoInput = (event) => {
    this.setState({newTodo: event.target.value});
  }

  addTodo = (event) => {
    event.preventDefault();
    const udpatedTodos = this.state.toDos;
    udpatedTodos.push(this.state.newTodo);
    this.setState({
      todos: udpatedTodos,
      newTodo: ''
    });
  }

  render() {
    return (
      <div>
        {this.state.toDos.map(todo, i) => <Todo key={i} todo={todo} />)}
        <form onSubmit={this.addTodo}>
          <input onChange={this.handlenewTodoInput} placeholder="Add a new todo" value={this.state.newTodo} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoList;