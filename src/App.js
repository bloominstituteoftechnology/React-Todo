import React from 'react';
import styled from 'styled-components'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  height: 98vh;
`

const Title = styled.h1`
  color: white;
`

const todos = [
  {
    item: 'Learn React',
    id: Date.now(),
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      todos: todos
    }
  }

  handleCompleted = () => {
    const newItem = this.state.todos.filter((item) => {
      return (item.completed = true)
    })

    this.setState({
      todos: newItem
    })
  }

  handleToggle = (todoId) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === todoId) {
          return {
            ...item, completed: !item.completed
          }
        }
        return (item)
      })
    })
  }

  handleTodoAdd = (todoItem) => {
    const todo = {
      item: todoItem,
      id: Date.now(),
      completed: false
    }

    const newTodos = [...this.state.todos, todo]

    this.setState({
      todos: newTodos
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <Wrapper>
        <Title>To Do List</Title>
        <TodoList handleCompleted={this.handleCompleted} todos={this.state.todos} handleToggle={this.handleToggle} />
        <TodoForm handleTodoAdd={this.handleTodoAdd} />
      </Wrapper>
    );
  }
}

export default App;
