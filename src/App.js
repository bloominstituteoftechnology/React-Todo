import React from 'react'
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import './components/TodoComponents/Todo.css'

localStorage.getItem('state')

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state =
      {Todos: 
        [
          {task: 'watch this week\'s The Orville',
          id: 1528817077286,
          completed: false},
          {task: 'watch this week\'s Star Trek Discovery',
          id: 1528817071031,
          completed: false},
        ],
        Todo: '',
      }
  }

  newTodo = (event) => this.setState({Todo: event.target.value})

  addTask = (event) => {
    event.preventDefault()
    let tempStr = this.state.Todo
    tempStr = tempStr.replace(/\s+/g, '')
    if (tempStr !== 0){
      const tempTodos = this.state.Todos.slice()
      tempTodos.push({ task: this.state.Todo, id: Date.now(), completed: false, })
      this.setState({Todos: tempTodos, Todo: ' '})
    }
  }

  strikeThrough = (id) => {
    let todos = this.state.Todos.slice()
    todos = todos.map( todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
        return todo
      } else {
        return todo
      }
    }
    )
    this.setState({ todos })
  }

  clearCompleted = (event) => {
    let Todos = this.state.Todos.slice()
    Todos = Todos.filter (Todo => !Todo.completed)
    this.setState({ Todos })
  }

  render() {
    return (
      <div>
        <h1>todo list</h1>
        <TodoList todos={this.state.Todos} toggleStrike={this.strikeThrough} />
        <TodoForm changeInput={this.newTodo} addTodo={this.addTask} clearCompleted={this.clearCompleted} vOS={this.state.Todo}/>
      </div>
    );
  }
}

export default App;
