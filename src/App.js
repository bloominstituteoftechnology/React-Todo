import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import styled from 'styled-components'

const StyledApp = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  background: darkorchid;
`

const todos = [
  {
    name: "Clean Room",
    id: 1,
    completed: false
  },
  {
    name: "Organize Favorites",
    id: 2,
    completed: false
  },
  {
    name: "Practice JavaScript",
    id: 3,
    completed: false
  },
  {
    name: "Watch Tomorrow's Training Kit",
    id: 4,
    completed: false
  },
  {
    name: "Practice phenomenological, non-conceptual perception stream",
    id: 5,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
        todos: todos,  //shortcut this.state = { groceries } because is identical
    }
  }

  toggleTodo = id =>{
    this.setState({
      todos: this.state.todos.map(todo =>{
        if (todo.id === id) {
          return{
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }

  addTodo = todoName =>{
    const newTodo ={
      name: todoName,
      id: (this.state.todos.length + 1),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  clearCompleted = () =>{
   this.setState({
     todos: this.state.todos.filter(todo =>
        todo.completed === false
     )
   })
  }

  render() {
    return (
      <StyledApp className='App'>
        <div className='header'>
          <h1 onClick={() => this.setState({})}>To Do List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList 
          toggleTodo={this.toggleTodo}
          todos={this.state.todos}
          clearCompleted={this.clearCompleted}
        />
      </StyledApp>
    );
  }
}

export default App;
