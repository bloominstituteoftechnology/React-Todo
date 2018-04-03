import React from 'react';
import TodoList from './components/TodoList'
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
      <h2>Harrison Brock's Todo App</h2>
      <TodoList />
      </div>
    );
  }
}
export default App;
