import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css'

let todoData = [{
  task: 'get cookies',
  id: 5,
  completed: false
},{
  task: 'eat cookies',
  id: 1,
  completed: false
}]

class App extends React.Component {
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      todoData,
    }
}

toggleItem = id => {
  this.setState({
    todoData: this.state.todoData.map(item => {
      if (item.id === id) {
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

addTask = taskName => {
  const newTask = {
    task: taskName,
    id: Date.now(),
    completed: false
  };
  this.setState({
    todoData: [...this.state.todoData, newTask]
  })
}

clearCompleted = () => {
  this.setState({
    todoData: this.state.todoData.filter(item=> !item.completed)
  });
};

  render() {
    return (
      <div>
        <h2>ToDo List: MVP</h2>
        <TodoList todoData={this.state.todoData} toggleItem={this.toggleItem}/>
        <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
