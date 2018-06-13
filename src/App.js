import React from 'react';
import ToDo from './components/TodoComponents/Todo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          task: 'Organize Garage',
          id: Date.now(),
          completed: false,
        },
        {
          task: 'Bake Cookies',
          id: Date.now(),
          completed: false,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDo tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
