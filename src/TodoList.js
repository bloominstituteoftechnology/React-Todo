import React from 'react';
import { Component } from 'react'
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();
    const todos = JSON.parse(window.localStorage.getItem('todos')) || [];
    alert(JSON.stringify(todos));
    this.state = {
      todos,
      newTodo: '',
    };
  }

  render() {
    return (
      <div>
        <ul>{this.state.todos.map((todo, i) => {
          return (
            <div key={i}>
              <Todo key={i} text={todo.text} completed={todo.completed} onClick={this.toggleCompleted} />
              <button key={i} type="button" onClick={this.removeTodo}>x</button>
            </div>
          )})}</ul>
        <form onSubmit={this.addNewTodo} onChange={this.updateTodo}>
          Add new todo:<br /><br />
          <input id="input" type="text" placeholder="New todo" /><br /><br />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }

  updateTodo = (event) => {
    this.setState({
      todos: this.state.todos,
      newTodo: event.target.value,
    });
  };

  addNewTodo = (event) => {
    event.preventDefault();
    const todos = [...this.state.todos, {
      text: this.state.newTodo,
      completed: false,
    }];
    window.localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({
      todos,
      newTodo: '',
    });
    document.getElementById('input').value = '';
  };

  removeTodo = (event) => {
    let todos = this.state.todos;
    const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    todos.splice(index, 1);
    window.localStorage.setItem(todos, JSON.stringify(todos));
    this.setState({
      todos,
      newTodo: this.state.newTodo,
    });
  };

  toggleCompleted = (event) => {
    let todos = this.state.todos;
    const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    todos[index].completed = !todos[index].completed;
    window.localStorage.setItem(todos, JSON.stringify(todos));
    this.setState({
      todos,
      newTodo: this.state.newTodo,
    });
    
  }
}

export default TodoList;

/*import React from 'react';
import { Component } from 'react'
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  render() {
    return (
      <div>
        <ul>{this.state.todos.map((todo, i) => {
          return <Todo key={i} text={todo} />
        })}</ul>
        <form onSubmit={this.addNewTodo} onChange={this.updateTodo}>
          Add new todo:<br /><br />
          <input id="input" type="text" placeholder="New todo" /><br /><br />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }

  updateTodo = (event) => {
    this.setState({
      todos: this.state.todos,
      newTodo: event.target.value,
    });
  };

  addNewTodo = (event) => {
    event.preventDefault();
    const todos = this.state.todos;
    todos.push(this.state.newTodo);
    this.setState({
      todos,
      newTodo: '',
    });
    document.getElementById('input').value = '';
  };
}

export default TodoList;*/
