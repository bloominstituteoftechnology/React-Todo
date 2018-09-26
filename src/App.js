import React from 'react'
import './App.css'
import { Todo } from './components/TodoComponents/Todo'
const todoData = require ('./components/TodoComponents/TodoData.json')
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()

    this.state = {
      todos: [],
      text: "",
      isCompleted: false,
      nextId: Date.now()
    }
  }
// This will mount everything before it renders onto the screen. All data will get rendered here.
  componentWillMount() {
    this.setState ( {
     todos: todoData.key
    })
  }

  handleChange = (e) => {
    this.setState({text: e.target.value })
  }

  todoList = (todo) => {
    //Verify there is something  in our todo input
    if (todo.length > 0) {
      this.addTodo(todo)
      this.setState({ text: '' })
    }
  }

  handleKeyPress = (e) => {
    // CharaCode is number 13 which 'Enter'
    if (e.charCode === 13 ) {
      //Enter can only submit if there is at least 1 character in the field.
      if(this.state.text.length >= 1)
      this.addTodo(e.target.value)
      this.setState({
        text: ''
      })
      
    }
  }

  handleClick = () => {
  
  }

  addTodo = (todoText) => {
    // Takeing in the new todo string and adding it to the list
    let todos = this.state.todos.slice()
    todos.push({ id: this.state.nextId, text: todoText, isCompleted:this.state.isCompleted})
    this.setState({
      todos: todos,
      isCompleted: false,
      nextId: Date.now() + 1,
    })
  }
    render() {
    return (
      <div className="app-body">
        <h2>REACT - TO DO LIST</h2>
        <Todo todos={this.state.todos} text={this.state.text} addTodo={this.addTodo} handleKeyPress={this.handleKeyPress} todoList={this.todoList} handleChange={this.handleChange} />
      </div>
    )

  }
}

export default App
