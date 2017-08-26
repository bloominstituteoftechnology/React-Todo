import React, { Component } from 'react';
import TodoForm from './addToDo';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      todo:'',
      newTodo:'',
      todos: ['item 1', 'item 2'],
    }
  this.makeNewTodo = this.makeNewTodo.bind(this)
  this.addTodo = this.addTodo.bind(this);
  };

  makeNewTodo(event) {
    this.setState({newTodo: event.target.value});
  }

  addTodo() {
    const todos = this.state.todos;
    const todo = this.state.todo;
    const newTodo = this.state.newTodo;
    todos.push(this.state.newTodo);
    this.setState({todos, todo: ''});
    console.log(todos);
  }

  render() {
    return(
      <div>
        <h4>This is my to do list:</h4>
        <ul>
          {this.state.todos.map((todos, i) => {
            return <li key={i}> 
              {todos}
            </li>
          })}
        </ul>
        <TodoForm
          todo={this.state.newTodo}
          onTodoInput={this.makeNewTodo}
          onTodoSubmit={this.addTodo} />
      </div>
    )}
}
export default ToDoList;
