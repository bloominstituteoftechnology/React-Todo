import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
      todos: [],
      currentItem: {
        task: '',
        id: '',
        completed: false
      },
    }
  }
  handleClick = (todoId) => {

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            task: todo.task,
            id: todo.id,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { task: itemText, id: Date.now() }
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.task !== '') {
      const todos = [...this.state.todos, newItem]
      this.setState({
        todos: todos,
        currentItem: { task: '', id: '' },
      })
    }
}
  render() {
    return (
      <div>
        <h1>To-Do List: MVP</h1>
        <TodoList 
          todos={this.state.todos} 
          handleClick={this.handleClick} 
        />
        <TodoForm 
          addItem={this.addItem} 
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem} 
        />
      </div>
    );
  }
}

export default App;