import React, { Component } from 'react';
import AddButton from './components/component.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'To Do',
      task: '',
      tasks: []
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <AddButton />
      </div>
    );
  }
}

export default App;
