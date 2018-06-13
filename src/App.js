import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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
          completed: true,
        },
      ],
    };
  }

  formHandler = addedTask => {
    let newTasks = this.state.tasks.slice();
    newTasks.push(addedTask);
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ul>
          <TodoList tasks={this.state.tasks} />
        </ul>
        <TodoForm FormHandle={this.formHandler} />
      </div>
    );
  }
}

export default App;
