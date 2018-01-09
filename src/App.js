import React, { Component } from 'react';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="title">To-do App</h1>
        <List />
      </div>
    );
  }
}
export default App;
