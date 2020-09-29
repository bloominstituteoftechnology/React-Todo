import React from 'react';
import './components/Todo.css'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


const taskData= [
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
]

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      tasks: taskData,
      toggleComplete: () => {},
    }
  }

  toggleComplete = (toDoID) => {
    this.setState({
      tasks: this.state.tasks.map((item) => {
        if (item.id === toDoID) {
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

  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  clearCompletedTasks = e => {
  
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    })
    console.log('Testing')
  }

  render() {
    return (
      <div className="App">
        <h1> To Do List</h1>
       
    <form >
      <div id="list">
      <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleComplete}
          />
      </div>
      <div id="submit">
         
          <TodoForm addTask={this.addTask}
                    clearCompletedTasks={this.clearCompletedTasks}
          />
          </div>
          </form>
      </div>
    );
  }
}

export default App;
