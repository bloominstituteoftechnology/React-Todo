import React, { Component } from 'react';
import List from './Components/List';

class App extends Component {
  constructor() {
    super();
    this.state = ['testDo'];
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <List items={this.state} />
      </div>
    );
  }
}  

export default App;
