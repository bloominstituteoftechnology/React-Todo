import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

import './App.css'

class App extends React.Component {

  constructor(){
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
      todoText: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleChange(e) {
    this.setState({todoText: e.target.value})
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
    this.setState({todos: [], todoText: ''})
  }
  render() {
    return (
      <div className="app-container">
        <TodoList todos={this.state.todos} />
        <TodoForm handleAdd={this.handleAdd} 
                  handleChange={this.handleChange}
                  handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;