import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const tasks = [
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
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    }
  }

toggleTask = id => {
  // console.log('click')
  this.setState({
    tasks: this.state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      } else {
        return task
      }
    })
  })
}

addTask = taskName => {
  const newTask = {
    task: taskName,
    id: Date.now(),
    completed: false
  }
  this.setState({
    tasks: [...this.state.tasks, newTask]
  })
}

clearFinished = () => {
  this.setState({
    tasks: this.state.tasks.filter(task => !task.completed)
  })
}

  render() {
    return (
      <div>
        <h2>To-Do List:</h2>
        <TodoList 
          toDoItems={this.state.tasks}
          toggleTask={this.toggleTask}
        />
        <TodoForm 
          addTask={this.addTask}
          clearFinished={this.clearFinished}
        />
      </div>
    );
  }
}

export default App;
