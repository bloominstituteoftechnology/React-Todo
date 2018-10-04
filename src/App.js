import React, { Component } from 'react'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import TodoFilter from './components/TodoComponents/TodoFilter'
import './reset.css'
import './app.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
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
      ],
      value: '',
      filterParam: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: this.state.value,
          id: Date.now(),
          completed: false
        }
      ],
      value: ''
    })
  }

  completeTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.map(
          todo =>
            todo.id === id
              ? { ...todo, completed: todo.completed === true ? false : true }
              : todo
        )
      ]
    })
  }

  removeCompletedTodos = event => {
    event.preventDefault()
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.completed === false)]
    })
  }

  render() {
    const { todos, value, filterParam } = this.state
    const {
      handleChange,
      handleSubmit,
      completeTodo,
      removeCompletedTodos
    } = this

    const filteredTodos = todos.filter(({ task }) =>
      task.match(new RegExp(filterParam, 'i'))
    )

    return (
      <div className="container">
        <TodoForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          removeCompletedTodos={removeCompletedTodos}
          value={value}
        />
        <TodoFilter handleChange={handleChange} filterParam={filterParam} />
        <TodoList todos={filteredTodos} completeTodo={completeTodo} />
      </div>
    )
  }
}

export default App
