import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './App.css';



const taskArray = [{
      
  task: '',
  id: 1,
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
      } else{
        return task;
      }

    })
  })
}

clearCompleted = () => {
  this.setState({
    tasks: this.state.tasks.filter(task=> !task.completed)
  }

  )
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList tasks={this.state.tasks}
                  toggleTask={this.toggleTask}
                  clearCompleted={this.clearCompleted}/>

      </div>
    );
  }
}

export default App;
