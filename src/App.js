import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          task: 'Organize Garage',
          id: Date.now() + Math.random(),
          completed: false,
        },
        {
          task: 'Bake Cookies',
          id: Date.now() + Math.random(),
          completed: false,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ul>
          <TodoList tasks={this.state.tasks} />
        </ul>
      </div>
    );
  }
}

export default App;
