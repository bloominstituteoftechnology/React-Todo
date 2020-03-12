import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const originalToDoList = [
  {
    task: 'Take out garbage',
    id: 2365346756,
    completed: false
  },
  {
    task: 'Find the keys',
    id: 82456475456,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDoList: originalToDoList
    };
  }

  toggleCompleted = taskId => {
    console.log("Task completed!");
    this.setState({
      toDoList: this.state.toDoList.map(task => {
        // return task.id === taskId ? {...task, completed: !task.completed} : task
        if (task.id === taskId) {
          return {
            ...task,
            purchased: !task.purchased
          };
        }
        return task;
      })
    });
  };

  addTask = taskName => {
    this.setState({
      toDoList: [
        ...this.state.toDoList,
        {
          task: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  clearCompleted = () => {
    console.log("task cleared");
    this.setState({
      toDoList: this.state.toDoList.filter(task => {
        return !task.completed
      })
    })
  };

  render() {
    return (
      <div>
        <div>
          <h2>Todo App!</h2>
          <TodoForm addTask={this.addTask}/>
        </div>
        <div>
          <TodoList
          toDoList={this.state.toDoList}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
