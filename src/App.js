import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
const tasks = [
  {
      name: 'Work out',
      id: 1,
      completed: false
  },
  {
      name: 'Do dishes',
      id: 2,
      completed: false
  },
  {
      name: 'Clean room',
      id: 3,
      completed: false
  },
  {
      name: 'Finish Project',
      id: 4,
      completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }
  toggleDone = (itemId) => {
    this.setState( {
      task: this.state.tasks.map((task) => {
        if (task.id === itemId) {
          return { 
            ...task, 
            completed: !task.completed
          };
        }
        return task
      })
    })
  }
  addTask = (taskName) => {
    this.setState({
      tasks: [...this.state.tasks, { name: taskName, id: Date.now(), completed: false}]
    })
  }
  completedTask = () => {
    this.setState({
      tasks: this.state.tasks.filter((task) => !task.completed)
    })
  }
  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList 
        tasks={this.state.tasks}
        toggleDone={this.toggleDone}
        completedTask={this.completedTask}/>
      </div>
      
    );
  }
}

export default App;
