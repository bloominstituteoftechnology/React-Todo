import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    todos: [
      {
        task: 'Tasks',
        completed: false
      },
    ]
  }

  addTask = () => {
    const todos = this.state.todos.slice();
    todos.push({
      task: 'hi',
      completed: false
    });

    this.setState({ todos: todos });
    console.log(this.state);
  };

  render() {
    return (
      <TodoList todo={this.state.todos} addTask={this.addTask} />
    );
  }
}

export default App;
