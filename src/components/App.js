import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      todo: ''
    };
    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  handleRemoveTodo(todoId) {
    const newTodoList = this.state.todoList;
    newTodoList.forEach((currTodo, i) => {
      if (currTodo.id === todoId) {
        newTodoList.splice(i, 1);
      }
    });
    this.setState({ todoList: newTodoList  });
  }

  handleTodoChange(event) {
    this.setState({ todo: event.target.value });
  }

  handleAddTodo() {
    // Create an object with 2 properties id and title.
    // id assigns a unique id to a newTodo.
    // title holds the text of the newTodo.
    const newTodo = {};
    newTodo['id'] = this.state.todoList.length;
    newTodo['title'] = this.state.todo;

    // Create an array newTodoList.
    // push the value of new todo item to this array
    const newTodoList = this.state.todoList;
    newTodoList.push(newTodo);
    this.setState({ todoList:newTodoList, todo: '' });
    //document.getElementById('inputElem').value = '';
  }

  render() {
    return (
      <div>
        <input
          //id = "inputElem"
          type="text"
          value={this.state.todo}
          onChange={this.handleTodoChange}
        />
        <button onClick={this.handleAddTodo}>Submit Todo</button>
        <TodoList
          removeTodo={this.handleRemoveTodo}
          todoList={this.state.todoList}
        />
      </div>
    );
  }
}

export default App;