import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

addTodo = (event) => {
    event.preventDefault();
    const todoList = this.state.todos;
    todoList.push(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: todoList
    });
  }

handleTodoInput = (event) => {
  this.setState({ newTodo: event.target.value });
};

render() {
    return (
      <div class="todo-box">
        <h2>Todo App</h2>
        <div class="todo-list">
            {this.state.todos.map(todo => <ChildComponent thing={todo} />)}
            <form class="myForm" onSubmit={this.addTodo}>
                <input type="text" onChange={this.handleTodoInput} placeholder="Add New Todo" value={this.state.newTodo} />
            </form>
        </div>
       </div>
    );
  }
}




export default App;
