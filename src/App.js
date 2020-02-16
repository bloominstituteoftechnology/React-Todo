import React from 'react'

import SearchForm from './components/SearchForm'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      todoList: []
    }
    console.log(this.state)
  }

  toggleItem = itemid => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === itemid) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    })
  }

  addItem = listItem => {
    console.log('listItem in the addItem function: ', listItem)
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          task: listItem,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(item => !item.completed)
    })
  }

  searchResultDisplay = search => {
    console.log(search)
    let searchResults = this.state.todoList.filter(
      item => item.task.toLowerCase() === search.toLowerCase()
    )
    this.setState({
      todoList: searchResults
    })
  }

  render () {
    return (
      <div className='App'>
        <h1>Hutch's TODO List:</h1>
        <div className='todo-wrapper'>
          <TodoForm
            task={this.state.todoList.task}
            addItem={this.addItem}
            clearCompleted={this.clearCompleted}
          />
        </div>
        <TodoList todoList={this.state.todoList} toggleItem={this.toggleItem} />
        <div className='search'>
          <SearchForm search={this.searchResultDisplay} />
        </div>
      </div>
    )
  }
}
export default App
