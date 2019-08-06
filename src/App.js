import React from 'react';

import  TodoList from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'
// import Todo from './components/TodoComponents/Todo.js'

const todoData = [
  {
    task: 'Clean Room',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Study',
    id: 1528817084358,
    completed: false
  }
];



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todoData
    };
  }


  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoData: [...this.state.todoData, newTask]
    })
  };

  toggleTask = id => {
    console.log("ID is working!");

  }

  clearCompleted = () => {
    this.setState({
      groceries: this.state.todoData.filter(task => !task.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div> 
          <TodoList todoData={this.state.todoData}/>
          <TodoForm addTask={this.addTask} toggleTask={this.toggleTask} /> 
        </div>
      </div>
    );
  }
}

export default App;

//initial commit 
