import React, { Component } from 'react';
import Todo from './Todo';
// import './TodoList.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: cetner;
  align-items: cetner;
  align-self: center;
`
const Input = styled.input`
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .2);
  background-color: #89bdd3;
  font-size: 1.2em;
  padding: 15px;
  box-sizing: border-box;
  border: 4px solid #9ad3de;
  outline: none;
  transition: 0.5s;

  &:focus {
    border: 9px solid #89bdd3;
    background-color: #9ad3de;
    color: #e3e3e3;
  }
  &::placeholder {
    color: #e3e3e3;
    text-align: center;
  }
`
const Form = styled.form`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };
  }
  
  handleTodoInput = (event) => {
    this.setState({ newTodo: event.target.value });
  }

  addTodo = (event) => {
    event.preventDefault();
    const todoList = this.state.todos;
    todoList.push(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: todoList
    });
  }
  render() {
    return (
      <Wrapper>
        <Form onSubmit={this.addTodo}>
          <Input onChange={this.handleTodoInput} placeholder="Add new todo" value={this.state.newTodo} type="text" />
        </Form>
        <Wrapper>
          {this.state.todos.map((todo, i) => <Todo key={i} index={i} todo={todo} />)}</Wrapper>
        </Wrapper>
      );
    }
}

export default TodoList;