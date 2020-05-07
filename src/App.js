import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./components/Todo.css";

const tasks = [
  {
    task: 'Vacation, all I ever wanted',
    id: 182,
    complete: false
  },
  {
    task: 'Vacation, had to get away',
    id: 2554422,
    complete: false
  },
  {
    task: 'Wash Car',
    id: 1345,
    complete: false
  },
  {
    task: 'Write Song',
    id: 16354,
    complete: false
  },
  {
    task: 'Get Gud',
    id: 454,
    complete: false
  },
  {
    task: 'Be Better',
    id: 843,
    complete: false
  },
  {
    task: 'These codes ain\'t loyal',
    id: 560,
    complete: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  toggComplete = taskId => {
    console.log("bk: index.js: App: toggComplete: taskId ", taskId);
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            complete: !task.complete
          };
        }
        return task;
      })
    })
  }

  addTask = taskName => {
    console.log("bk: index.js: App: addTask: taskName: ", taskName)
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: taskName, complete: false, id: Date.now() }
      ]
    })
  }

  clearCompleted = () => {
    console.log("bk: index.js: clearCompleted")
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.complete
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo App</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          toggComplete={this.toggComplete}
          tasks={this.state.tasks}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
