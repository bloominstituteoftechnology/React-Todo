import React, { Component } from 'react'
import './components/TodoComponents/Todo.css'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends Component {
  inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
        completed:false
      },
    }
  }
  deleteItem = key => {
    var filteredItems = this.state.items.filter(item => {
      return item.key === key

    })
    filteredItems [0].completed = true
    this.setState({
      items: this.state.items,
    })
  }
  deleteAll = e => {
    var filteredItems = this.state.items.filter(item => {
      return !item.completed
    })
    this.setState({
      items: filteredItems,
    })
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }
  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          deleteAll={this.deleteAll}
        />
        <TodoForm entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    )
  }
}

export default App
