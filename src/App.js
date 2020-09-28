import React from 'react';
import './components/Todo.css'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const tasksData = [
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
      tasks: tasksData,
      toggleCompleted: () => {},
    }
  }

  toggleCompleted = (clickedToDoID) => {
    this.setState({
      tasks: this.state.tasks.map((item) => {
        if (item.id === clickedToDoID) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  clearCompletedTasks = e => {
    // Prevents page refresh
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    })
    console.log('Testing')
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
          />
          <TodoForm addTask={this.addTask}
                    clearCompletedTasks={this.clearCompletedTasks}
          />
      </div>
    );
  }
}

export default App;
