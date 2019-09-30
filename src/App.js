import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './App.css'

const taskArray = [{
      
  task: '',
  id: null,
  completed: false

}]

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      tasks: taskArray
  };
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

toggleTask = id => {
  this.setState({
    tasks: this.state.tasks.map(task => {
      if (task.id === id){
        return{
          ...task,
          completed: !task.completed
        };
      }
        return task;

    })
  })
}
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks}
                  toggleTask={this.toggleTask}/>
        <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
