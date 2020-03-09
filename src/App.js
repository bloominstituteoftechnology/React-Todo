import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [
  // {
  //   task: 'Organize Garage',
  //   id: 1528817077286,
  //   completed: false
  // },
  // {
  //   task: 'Bake Cookies',
  //   id: 1528817084358,
  //   completed: false
  // }
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks,
      task: ''
    };
  }

  toggleCompleted = clickedTaskId => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === clickedTaskId) {
          return {
            ...item,
            completed: !item.completed            
          };
        } else {
          return item;
        }
      })
    });
  }

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => { 
        if (item.completed === true) { return false; }
         else { return true; }
      })
    })
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
