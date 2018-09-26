import React from 'react'
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      todoList: [
        {
          task: 'Find out who killed Kenny',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Save the avengers',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Watch Deadpool 2..Again',
          id: 1528817084341,
          completed: false
        }
      ],
      todo: ''
    }
  }
  render () {
    const { todoList } = this.state
    return (
      <div className='App'>
        <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
          <div className='container'>
            <a href='/' className='navbar-brand'>
              Todo App Manager
            </a>
            <div>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <a href='/' className='nav-link'>
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='container'>
          <TodoList todos={todoList} />
          <TodoForm />
        </div>
      </div>
    )
  }
}

export default App
