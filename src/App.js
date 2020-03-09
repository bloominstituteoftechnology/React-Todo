import React from 'react';
import TodoForm from './components/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  todos = [
    {
      task: 'workout',
      id: Date.now(),
      completed: false
    },
    {
      task: 'walk dog',
      id: Date.now(),
      completed: false
    },
    {task: 'practice code',
     id: Date.now(),
     completed: false
  },
  ]

  toggleCompleted = clickedTodoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === clickedTodoId){
          return(
            {
              ...todo,
              completed: !todo.completed
            }
          )
        }
      })
    })
  }

  addTodo = todoItem => {
    const newTodo = {
      task: todoItem,
      id: new Date(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos,
      newTodo]
    })
  }

  constructor(){
    super()
    this.state = {
      todos,
      task: '',
      }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addItem={this.addTodo}/>
      </div>
    );
  }
}

export default App;
