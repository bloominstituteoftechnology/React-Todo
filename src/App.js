import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './components/Todo'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import './components/Todo.css'

const todoData = [
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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super()
    this.state = {
      todoData: todoData,
      itemText: ''
    }
  }

  toggleItem = id => {
   
    this.setState({
      todoData: this.state.todoData.map(task => {
        if (task.id === id){
          return {...task, completed: !task.completed};
        } else {
          return task
        }
      })
    })
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    }

    this.setState({
      todoData: [...this.state.todoData, newTask]
    })
  }

  handleChanges = event => {
    this.setState({
      itemText: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.addTask(this.state.itemText)
    this.setState({
      itemText:''
    })
  }

  handleComplete = event => {
    event.preventDefault()
    this.setState({
      todoData: this.state.todoData.filter(task => {
        return task.completed === false
      })
    })
  }

  render() {
    return (
      <div>
        <p className="completed">This is a test for syling</p>
        <h1>Welcome to your Todo App!</h1>
{/*mystuff*/}
        <div>
          <h2 onClick={ () => this.setState({})}>To Do List:</h2>
          <TodoForm handleSubmit={this.handleSubmit} handleChanges={this.handleChanges} itemText={this.state.itemText} handleComplete={this.handleComplete} />
        </div>
          <TodoList toggleItem={this.toggleItem} task={this.state.todoData}/>
      </div>
    );
  }
}

export default App;
