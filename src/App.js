import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import './components/Todo.css'

const tasksToDo = [

  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }

];

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    //this.state = './components/data/Data.js'
    this.state = {
      tasksToDo
  }
}

  toggleTask = taskId => {
    console.log("itemId: ", taskId);
    this.setState({
      tasksToDo: this.state.tasksToDo.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  addTask = task => {
    const newTask = {
      name: task,
      id: Date.now(),
      complete: false
    };
    this.setState({
      tasksToDo: [...this.state.tasksToDo, newTask]
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasksToDo: this.state.tasksToDo.filter(task => !task.completed)
    });
  };

  render() {
    return (
      
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          tasksToDo={this.state.tasksToDo}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
      
    );
  }
}

  export default App;