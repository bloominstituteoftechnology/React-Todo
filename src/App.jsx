import React from 'react';

import './App.css';

import ToDoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  submitForm(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <ToDoList submitForm={this.submitForm} />
      </div>
    );
  }
}

export default App;
