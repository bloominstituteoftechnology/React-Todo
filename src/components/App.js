/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      todo: '',
    };
    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }
  handleRemoveTodo(todoId) {
    const todoList = this.state.todoList;
    todoList.forEach((todo, i) => {
      if (todo.id === todoId) {
        todoList.splice(i, 1);
      }
    });
    this.setState({ todoList });
  }
  handleTodoChange(event) {
    this.setState({todo: event.target.value});
  }
  handleAddTodo() {
    const todo = { id: this.state.todoList.length };
    todo['title'] = this.state.todo;
    const todoList = this.state.todoList;
    todoList.push(todo);
    this.setState({ todoList, todo: ''});
  }
  render() {
    return(
      <div>
        <input 
          type="text" 
          value={this.state.todo} 
          onChange={this.handleTodoChange}
          />
          <button onClick={this.handleAddTodo}>Submit Todo</button>
          <TodoList removeTodo={this.handleRemoveTodo} todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;