import React, { Component } from 'react';
import Todo from './Todo.js'

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: { text: '' },
    };
  }

  addTodo = (e) => {
    e.preventDefault();
    
    const todos = this.state.todos.slice(0);
    todos.push(this.state.newTodo);

    this.setState({
      todos,
      newTodo: { text: '' },
    });
  }

  handleNewTodo = (e) => {
    const newTodo = {};
    newTodo.key = e.target.value.length;
    newTodo.text = e.target.value;
    newTodo.completed = false;
    
    this.setState({ newTodo });
  }

  todoClicked = (e) => {

    console.log(e);
    console.log(e.target);
    console.log(e.target.key);
    e.stopPropagation();
  }

  deleteTodo = (e) => {
    console.log('delete');
    e.stopPropagation()
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
            <Todo key={i}
            todo={todo}
            todoClicked={this.todoClicked}
            deleteTodo={this.deleteTodo} />
          );
        })}
      </div>
    );
  }
}

export default TodoList;