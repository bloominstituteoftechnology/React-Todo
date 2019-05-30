import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import { data } from './data';
import './components/TodoComponents/Todo.css'
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any
  // change handlers you need to work with your state
  constructor() {
    super();
    this.state= {
      todoData: data,
      task: '',
      id: '',
      completed: false
    }
  }
  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  toggleTask = id => {

    this.setState({
      todoData: this.state.todoData.map(task => {
        if(id === task.id) {
          return {...task, completed: !task.completed}
        }
        return task;
      })
    })
  }

  addTask = event => {
    event.preventDefault();
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoData: [...this.state.todoData, newTask],
      task: '',
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todoData: this.state.todoData.filter(task => !task.completed )
    })
  }

  render() {
    return (
      <div>
        <TodoList todoData={this.state.todoData} toggleTask={this.toggleTask}/>
        <TodoForm handleChanges={this.handleChanges} addTask={this.addTask} task={this.state.task} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}



export default App;
