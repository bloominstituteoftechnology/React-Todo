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
          completed: false,
        },
      ],
    };
  }

  formHandler = addedTask => {
    let newTasks = this.state.tasks.slice();
    newTasks.push(addedTask);
    this.setState({ tasks: newTasks });
  };

  clearHandler = task => {
    let tasks = this.state.tasks.slice();
    let notDone = tasks.filter(t => !t.completed);
    this.setState({ tasks: notDone });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ul>
          <TodoList tasks={this.state.tasks} HandleClear={this.clearHandler} />
        </ul>
        <TodoForm
          FormHandle={this.formHandler}
          clearHandle={this.clearHandler}
        />
      </div>
    );
  }
}

export default App;
