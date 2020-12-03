import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './styles.css';

const todoList = [
  {
    name: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todoList 
    };
   
  };

  addTask = (e, task) => {
    console.log("adding item");
    e.preventDefault();
    const newTodo ={
      name: task,
      completed: false,
      id: Date.now(),
    };
    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, newTodo]
    });
  }

  toggleTask = taskId => {
    console.log("toggling task", taskId);
  
    console.log ("previous state", this.state);
    this.setState({
      ...this.state,
      todoList: this.state.todoList.map(task => {
      if (taskId === task.id) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      else {
        return task;
      }
    })
  });
};
clearCompleted = (e) => {
  e.preventDefault();
  this.setState({
    ...this.state,
    todoList: this.state.todoList.filter (task => !task.completed)
  });
}



  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList 
          todoList={this.state.todoList} 
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
