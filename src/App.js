import React, { Component } from 'react';
import MyButton from './components/component.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'To-Do',
      task: '',
      tasks: []
    };
  }
  
  render() {
    return (
    <div>
      <h1>{this.state.title}</h1>
      <MyButton />
    </div>
    );
  }
}

export default App;
