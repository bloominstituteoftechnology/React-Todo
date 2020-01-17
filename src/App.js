import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

const tasks = [
  {
    title: 'Do laundry',
    completed: false,
    id: 123
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: tasks
    };
  }

  addNewTask = (newTask) => {
    const newState = {
      ...this.state,
      toDoList: [
        ...this.state.toDoList,
        { task: newTask, completed: false, id: Math.random() }
      ]
    };
    this.setState(newState);
    console.log(newState)
  };

  toggleCompleted = id => {
    const newState = {
      ...this.state,
      toDoList: this.state.toDoList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    };
    this.setState(newState);
  };

  clearCompleted = () => {
    const newState = {
      ...this.state,
      toDoList: this.state.toDoList.filter(task => {
        return !task.completed;
      })
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className = 'app'>
        <div className = 'header'>
          <h1>To Do List:</h1>
          <ToDoForm addNewTask = {this.addNewTask} />
        </div>
        <ToDoList 
          tasks = {this.state.toDoList}
          toggleCompleted = {this.toggleCompleted}
          clearCompleted = {this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
