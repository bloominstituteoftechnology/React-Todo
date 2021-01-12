import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from "./components/TodoForm"

class App extends React.Component {
  
  state = {
    todos: []
  }

  componentDidMount = () => {
    const localToDos = JSON.parse(localStorage.getItem("todoList"))
    this.setState({
      todos: localToDos || []
    })
  }

  handleSubmit = (e, newTask) => {
    e.preventDefault()

    let taskShape = {
      task: newTask,
      id: Date.now(),
      completed: false
    }
  

    const newTodoList = [...this.state.todos, taskShape]

    this.setState({
      todos: newTodoList
    })
    localStorage.setItem("todoList", JSON.stringify(newTodoList))
}
  toggleCompleted = id => {
    const todoByID = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo
    })
    this.setState({
      todos: todoByID
    })
    localStorage.setItem("todoList", JSON.stringify(todoByID))
  }

  clearCompleted = () => {
    const completed = this.state.todos.filter(todo => {
      return todo.completed === false
    }) 
    this.setState({
      todos: completed
    })
    localStorage.setIteem("todoList", JSON.stringify(completed))
  }

  render() {
    
      return (
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoList
            todos={this.state.todos}
            toggleCompleted={this.toggleCompleted}
          />
          <TodoForm 
            handleSubmit={this.handleSubmit}
            clearCompleted={this.clearCompleted}
          />
        </div>
      );
  }
}

export default App;
