import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    todos: {
      task: 'hi',
      completed: false
    }
  }

  render() {
    return (
      <TodoList todo={this.state.todos} />
    );
  }
}

export default App;
