import React from 'react';
import ToDoList from "./components/TodoList"
import ToDoForm from "./components/TodoForm"

const tasks = [
  {
    task: "",
    id: "",
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
      tasks: tasks
    }
  }

  handleTaskToggle = (taskId)=> {
    this.setState({
      tasks: this.state.tasks.map(task =>{
        if(tasks.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return(task);
      })
    });
  }

  handleTaskAdd = (taskName) => {
    const task = {
      name: taskName,
      id: Date.now(),
      completed: false
    };
    const newTasks = [...this.state.tasks, task];

    this.setState({
      tasks: newTasks
    })
  }

  handleTaskCompleted = () => {
    const newTasks = this.state.tasks.filter(task => {
      return (!task.completed);
    });

    this.setState({
      tasks: newTasks
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
        <h1>Welcome to your To-do App!</h1>
        <ToDoForm handleTaskAdd={this.handleTaskAdd}/>
        </div>
        <ToDoList tasks={this.state.tasks} handleTaskCompleted={this.handleTaskCompleted} handleTaskToggle={this.handleTaskToggle}/>
      </div>
    );
  }
}

export default App;


