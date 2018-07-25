import React, {Component} from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;
