import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from "./components/TodoList"
import styled from "styled-components"

import './components/Todo.css'

const todoArr = [
  {
    task: 'Organize Garage',
    id: 11,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 12,
    completed: false
  }
];

const StyledDiv = styled.div `
border:2px solid red;
display:flex;
flex-direction:column;
align-items:center;
background-color:green;
color: white;
font-weight: bold;
text-align: center;

`


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoArr // same as todoArr : todoArr
    }
  }


  addTodo = (event, todo) => {
    console.log('adding thing todo');
    event.preventDefault();
    
    const newTodo = {
      task : todo,
      id : Date.now(),
      completed: false
    };

    this.setState({
        ...this.state,
        todoArr : [...this.state.todoArr, newTodo]
    });
  };

  toggleTodo = (todoId) => {
    console.log('toggling todo', todoId);

    this.setState({
      ...this.state,
      todoArr : this.state.todoArr.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed : !todo.completed
          };
        }
          else {
            return todo;
          }
        })
    })
  }

  clearCompleted = (event) => {
    event.preventDefault();
    this.setState({
       ...this.state,
       todoArr : this.state.todoArr.filter((todo) => !todo.completed)
    });
  };




  render() {
    return (
      <StyledDiv>
        <h1>Welcome to your Todo App!</h1>
        <TodoForm addTodo={this.addTodo} />
      <TodoList 
      todoArr={this.state.todoArr}
      toggleTodo={this.toggleTodo}
      clearCompleted={this.clearCompleted}
      />
      </StyledDiv>
    );
  }
}

export default App;
