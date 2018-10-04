import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todos: [],
    newTodoItem: '',
    id: 0,
  };

  addTodoItem = (event) => {
    event.preventDefault();
    if (this.state.newTodoItem.length > 0) {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            item: this.state.newTodoItem,
            id: this.state.id,
            completed: false,
          },
        ],
        newTodoItem: '',
        id: this.state.id + 1,
      });
    }
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearAll = (event) => {
    event.preventDefault();
    const todosCopy = this.state.todos.slice();
    todosCopy.splice(0, this.state.todos.length);
    this.setState({
      todos: todosCopy,
    });
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  clearCompleted = (event) => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };

  render() {
    return (
      <div className="app">
        <TodoList
          todos={this.state.todos}
          newTodoItem={this.state.newTodoItem}
          markComplete={this.markComplete}
        />
        <TodoForm
          text={this.state.newTodoItem}
          changeHandler={this.changeHandler}
          onSubmit={this.addTodoItem}
          addTodoItem={this.addTodoItem}
          clearAll={this.clearAll}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;

// App is container
// TodoList will contain TodoItem components
// TodoForm will create new TodoItem components and push them into TodoList
