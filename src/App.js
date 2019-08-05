import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css';

const listData = [
  {
    task: 'finish app',
    id: 1111111,
    completed: false
  }
  
]
class App extends React.Component {
  constructor() {
  super();
  this.state = {
    todos: listData
  };
}

toggleTask = id => {
  this.setState({
todos: this.state.todos.map(task => {
      if (task.id === id) {
         return {
          ...task,
          completed: !task.completed
         };
    } else {
        return task;
      }
    })
  });
};

addTask = taskName => {
  const newTask = {
    task: taskName,
    id: Date.now(),
    completed: false
  }
  this.setState({
    todos: [...this.state.todos, newTask]
  })
}

clearCompleted = () => {
  this.setState({
    todos: this.state.todos.filter(task => !task.completed)
  })
 
}
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  
  render() {
    return (
      <div className = 'app'>
        <h1>Get SHIFT Done</h1>
        <TodoList todos={this.state.todos}
                  toggleTask={this.toggleTask} 
                  clearCompleted={this.clearCompleted}/>
        <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
