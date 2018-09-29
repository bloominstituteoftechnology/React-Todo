import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //constructor containing state object,  which contains array of todo objects
  
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: ''
    }
  }

  //handler function for whenever text is typed into input field 

  updateInput = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  //handler function for whenever todo list item is submitted

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.input !== '') {
      this.setState({
        todos: [...this.state.todos, {
          id: Date.now(),
          task: this.state.input,
          completed: false,
          class: 'todo'
        }],
        input: ''
      });
    }
  }

  //function to add strikethrough to completed items

  handleClick = (todoID) => {
    const todoItems = this.state.todos.slice();
    todoItems.map(todo => {
      if (todo.id === todoID) {
        todo.completed = !todo.completed;
        todo.class = todo.completed ? 'todo completed' : 'todo';
        return todo;
      }
      else {
        return todo;
      }
    });
    this.setState(
      {todos: todoItems}
    )
    console.log(this.state.todos);
  }

  //function to clear completed items

  clearCompleted = (e) => {
    e.preventDefault();
    let todoItems = this.state.todos.slice();
    todoItems = todoItems.filter(todo => todo.completed === false);
    this.setState(
      {todos: todoItems}
    );
  }

  //invoke individual components and render entire app

  render() {
    return (
      <div className='container'>
        <h1>Welcome to your Todo App!</h1>
        <TodoList 
          todos={this.state.todos}
          key={this.state.todos}
          completed={this.state.todos}
          handleClick={this.handleClick}
          todoClass={this.state.class}
          className='list'
        />
        <ToDoForm 
          submit={this.onSubmit} 
          onChange={this.updateInput}
          value={this.state.input}
          clear={this.clearCompleted}
          className='form'
        />
      </div>
    );
  }
}


export default App;
