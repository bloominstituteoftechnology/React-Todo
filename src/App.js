import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm' 


const toDoTasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor () {
    super();
    this.state = {
      toDoTasks
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTask = (e, task) => {
    e.preventDefault();

    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      toDoTasks: [...this.state.toDoTasks, newTask]
    });
  };

  toggleTask = taskId => {

    this.setState({
      toDoTasks: this.state.toDoTasks.map(task => {

        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }

        return task;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      toDoTasks: this.state.toDoTasks.filter(task => task.completed === false)
    });
  };

  
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          toDoTasks={this.state.toDoTasks}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
