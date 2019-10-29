import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './App.css';

const data = [
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
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: data
    }
  }

  addTask = task => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  filterCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => {
        if (!task.completed) {
          return task;
        }
        else
          return null;
      })
    })

  };

  toggleCompleted = id => {
    // Iterate to find the clicked item 
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        else {
          return task
        }
      })
    })
  }

  // ---------------- Render The Page --------------------
  render() {
    return (
      <div className="container">
        <h2>Things to do today:</h2>
        <TodoForm
          addTask={this.addTask}
        />
        <TodoList
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.filterCompleted}
          tasks={this.state.tasks} />
      </div>
    );
  }
} // End of App Class

export default App;
