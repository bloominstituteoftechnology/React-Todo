import React from 'react'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      list: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        }
      ],
      text: "",
    }
  }

  addTask = (e) => {
    e.preventDefault()
    console.log(e)
  }
  
  handleInput = (e) => {
    e.preventDefault()
    let text = e.target.value
    this.setState({ text })
  }

  clearCompleted = (e) => {
    e.preventDefault()
    console.log(e)
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          text={this.state.text}
          addTask={this.addTask}
          handleInput={this.handleInput}
          clearCompleted={this.clearCompleted}
        />
        <TodoList list={this.state.list} />
      </div>
    )
  }
}

export default App
