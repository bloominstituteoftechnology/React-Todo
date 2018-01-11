import React, { Component } from 'react';
import Todo from './Todo.js'

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: { 
        id: '',
        text: '',
        completed: false,
      },
    };
    this.addTodo.bind(this);
    this.handleNewTodo.bind(this);
    this.toggleCompleted.bind(this);
    this.deleteTodo.bind(this);
  }

  addTodo = (event) => {
    event.preventDefault();
    
    const todos = this.state.todos.slice(0);
    todos.push(this.state.newTodo);

    this.setState({
      todos,
      newTodo: { 
        id: '',
        text: '',
      },
    });
    event.stopPropagation();
  }

  handleNewTodo = (event) => {
    const newTodo = {};
    newTodo.id = `${event.target.value.length}-${event.target.value.split('').filter(elem => elem !== ' ').join('')}`;
    newTodo.text = event.target.value;
    
    this.setState( { newTodo } );

    event.stopPropagation();
  }

  toggleCompleted(id) {
    let todos = this.state.todos.slice();

    this.setState({ todos: todos.map((todo, i) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    })});
  }

  deleteTodo(id) {
    let delTodo;
    let todos = this.state.todos.slice();
    
    todos.forEach((todo) => {
      if (todo.id === id) delTodo = todo;
    })
   
    this.setState({ todos: todos.filter(todo => todo.id !== delTodo.id) })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.handleNewTodo} placeholder="Add new task" value={this.state.newTodo.text} />
          <button onClick={this.addTodo}>Submit</button>
        </form>
        <br />
        {this.state.todos.map((todo, i) => {
          return (
            <Todo key={`${i}-${todo.id}`}
            id={i}
            todo={todo}
            toggleCompleted={this.toggleCompleted.bind(this)}
            deleteTodo={this.deleteTodo.bind(this)} />
          );
        })}
      </div>
    );
  }
}

export default TodoList;