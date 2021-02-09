import React from 'react'
import ToDoList from './components/TodoList'
import ToDoForm from './components/TodoForm'
import './components/Todo.css'

const toDos = [
  {
    task: 'Example Task',
    id: 123,
    completed: false,
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      toDos: toDos,
      formText: '',
    }
  }

  toggleItem = (itemId) => {
    const newToDo = this.state.toDos.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: !item.completed,
        }
      } else {
        return item
      }
    })
    this.setState({
      toDos: newToDo,
    })
  }

  onInputChange = (evt) => {
    this.setState({
      formText: evt.target.value,
    })
  }

  addToDo = (evt) => {
    evt.preventDefault()
    const newItem = {
      task: this.state.formText,
      id: Math.floor(Math.random() * 1000 + 1),
      completed: false,
    }
    this.setState({
      toDos: [...this.state.toDos, newItem],
      formText: '',
    })
  }

  clearComplete = (evt) => {
    evt.preventDefault()
    const newToDos = this.state.toDos.filter((todo) => {
      console.log('hereboi', todo)
      if (!todo.completed) {
        return {
          ...todo,
        }
      } else {
        return null
      }
    })

    this.setState({
      toDos: newToDos,
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList toDos={this.state.toDos} toggleItem={this.toggleItem} />
        <ToDoForm
          addToDo={this.addToDo}
          formText={this.state.formText}
          onInputChange={this.onInputChange}
          clearComplete={this.clearComplete}
        />
      </div>
    )
  }
}

export default App
