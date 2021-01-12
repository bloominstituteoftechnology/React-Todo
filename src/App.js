import React from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          task: 'Code',
          id: 1,
          completed: false
        },
        {
          task: 'Drink with the Bois',
          id: 2,
          completed: false
        }
      ],
      todo: ''
    }
  }
  
  addTodo = e => {
    e.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({ 
      todos: [...this.state.todos, newTodo], 
      todo: '' 
    });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value })

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo
      } else {
        return todo
      }
    })
    this.setState({ todos })
  }

  clearCompletedTodos = e => {
    e.preventDefault()
    let todos = this.state.todos.filter(todo => !todo.completed)
    this.setState({ todos })
  };

  render() {
    return (
      <div>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    )
  }
}

export default App