import React from 'react';
import Input from './input.js';
import List from './list.js';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <Input />
        <List />
      </div>
    );
  }
}

export default App;
