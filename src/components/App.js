import React from 'react';
import Input from './input.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <Input />
        <ul>
          <li>Feed Cat</li>
          <li>Wash Cat</li>
          <li>Feed Cat To Dog</li>
        </ul>
      </div>
    );
  }
}

export default App;
