import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: []
    }
  }

  handleAdd = (newTodo) => {
  this.setState({
    todos: [...this.state.todos,
      { id: this.state.todos.length,
        text:newTodo,
        completed:false
      }]
  })
  }
  handleComplete = (todo) => {
    console.log('firing')
    console.log(!todo.completed)
    console.log(this.state.todos)
  this.setState(
   { todos: this.state.todos.map( item => {
     if(item.id === todo.id) {
       return {
         ...item,
         completed: !item.completed
       }
     }
     return (item)
   })
   }
   )
  }

  handleFilter = () => {
    const newTodos = this.state.todos.filter( todo => {
      return(!todo.completed)
    }).map((todo, i) => {
      return {...todo,
        id: i
      }
    })
    this.setState({
      todos: newTodos
    })
  }
  

  render() {
    return (
      <div className = "App">
        <h2>Welcome to your Todo App!</h2>
        <TodoList handleComplete = {this.handleComplete} todos={this.state.todos} />
        <TodoForm handleAdd = {this.handleAdd} handleFilter = {this.handleFilter} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
