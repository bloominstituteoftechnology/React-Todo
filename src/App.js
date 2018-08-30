import React from 'react'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './App.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      list: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
        },
        {
          task: 'Click "Clear Completed" to remove vaccum carpet',
          id: 1535575226154,
          completed: true,
        },
        {
          task: 'Click "Clear Completed" to remove washing car',
          id: 1535575227074,
          completed: true,
        }
      ],
      text: "",
    }
  }

  addTask = (e) => {
    e.preventDefault()
    let newTask = {
      task: this.state.text,
      id: Date.now(),
      completed: false
    }
    this.setState({ 
      list: [...this.state.list, newTask],
      text: ""
    })
  }
  
  handleInput = (e) => {
    e.preventDefault()
    let text = e.target.value
    this.setState({ text })
  }

  clearCompleted = (e) => {
    e.preventDefault()
    let list = this.state.list.filter(task => task.completed === false)
    this.setState({ list })
  }

  addComplete = (e, reactKey) => {
    let item = this.state.list.filter(task => task.id === reactKey)
    item[0].completed = !item[0].completed
    this.setState({ ...this.state.list, item})
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Welcome to your Todo App!</h1>
        <TodoForm 
          text={this.state.text}
          addTask={this.addTask}
          handleInput={this.handleInput}
          clearCompleted={this.clearCompleted}
        />
        <TodoList
          list={this.state.list}
          addComplete={this.addComplete}
        />
      </div>
    )
  }
}

export default App
