import React, { Component } from 'react';

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

      </div>
    );
  }
}

export default App;
