import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const tasks = [
  {
    name: '',
    id: Date.now(),
    completed: false,
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  toggleCompleted = (taskId) => {
    const newTask = this.state.tasks.map(task => {
      if (taskId === task.id) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      else { return task; }
    })
    this.setState({
      ...this.state,
      tasks: newTask
    })
  }

  addTask = (taskName, evt) => {
    evt.preventDefault();
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    })
  }
  

  clearCompleted = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(task => !task.completed)
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>

        <h1>Welcome to your To Do App!</h1>

        <TodoForm addTask={this.addTask} />

        <TodoList 
          clearCompleted={this.clearCompleted} 
          toggleCompleted={this.toggleCompleted} 
          tasks={this.state.tasks} />
          
      </div>
    );
  }
}

export default App;
