import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
      <div className="header">
        <h1>To Do List</h1>
        <TodoForm />
      </div>
      <TodoList
        groceries={this.state.groceries}
        doneit={this.doneit}
      />
    </div>
    );
  }
}

export default App;
