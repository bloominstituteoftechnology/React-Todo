import React from 'react'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          task: 'take out trash',
          id: 1,
          completed: false
        },
        {
          task: 'do the laundry',
          id: 2,
          completed: false
        }
      ],
      todoText: '',
      numTodos: 2
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
  }

  handleChange(e) {
    this.setState({ todoText: e.target.value })
    console.log(this.state.todoText)
  }

  handleAdd(e) {
    e.target.parentElement.children[0].value = ''
    this.setState({
      todos: this.state.todos.concat({
        task: this.state.todoText,
        id: Date.now(),
        completed: false
      }),
      todoText: ''
    })
  }

  handleClear(e) {
    const todos = this.state.todos.filter(t => !t.completed)
    this.setState({ todos })
  }

  toggleComplete(id) {
    console.log('toggled ' + id)
    let { todos } = this.state

    todos = todos.map(t => {
      if (t.id === id) {
        t.completed = !t.completed
      }
      return t
    })

    this.setState({ todos })
  }

  render() {
    return (
      <div className="app-container">
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          numTodos={this.state.numTodos}
        />
        <TodoForm
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleClear={this.handleClear}
        />
      </div>
    )
  }
}

export default App
