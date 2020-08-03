import React from 'react';
import { v4 as uuid } from 'uuid'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todos = [
  { name : "Get the bag",
    id : uuid(),
    complete: false, 
  }
]

class App extends React.Component {
  constructor () {
    super()
    // you will need a place to store your state in this component.
    this.state = {
      todos
    }
  }
  // this component is going to take care of change handlers to work with your state
  toggleDone = id => {
    this.setState({ 
      todos : this.state.todos.map( todo => {
        if (todo.id === id ){
          return {
            ...todo, 
            complete: !todo.complete
          } 
        } 
        else { 
          return todo
        }
      })
    })
  }

  addTodo = todoName => {
    const newTodo = {
      name: todoName,
      id: uuid(),
      complete: false
    }
    this.setState({
      todos : [ ...todos, newTodo ]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          toggleDone={this.toggleDone} 
          todos={this.state.todos} 
        />
        <TodoForm 
          addTodo= {this.addTodo} 
        />
      </div>
    );
  }
}

export default App;
