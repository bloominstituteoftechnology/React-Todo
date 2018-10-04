import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { EventEmitter } from './utils.js'
import styles from './components/TodoComponents/Todo.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      inputText: ''
    }
  EventEmitter.subscribe('toggleTodo', (id) => this.toggleTodo(id))
	EventEmitter.subscribe('addTodo', (event) => this.addTodo(event))
	EventEmitter.subscribe('clear', (event) => this.clear(event))
  }

  changeHandler = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todo: [
        ...this.state.todo,
        {
          task: this.state.inputText,
          id: Date.now(),
          completed: false
        }
      ],
      inputText: ''
    })
  }

  toggleTodo = id => {
    this.setState({
      todo: this.state.todo.map(
        item => item.id === id ? Object.assign(item, { completed: !item.completed }) : item
      )
    })
  }

  clear = (event) => {
    event.preventDefault()
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div className='app'>
        <h1>TODO</h1>
        <TodoForm
          inputText={this.state.inputText}
          changeHandler={this.changeHandler}
        />
        <TodoList 
          todo={this.state.todo}
        />
      </div>
    );
  }
}

export default App;
