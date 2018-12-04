import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      value: "",
      todoData: [
        {
          task: "",
          id: "",
          complete: ""
        }
      ]
    }
  
  }

  changeValue = event => {
    this.setState({ value: event.target.value })
  }

  addTodo = event => {
    let todos = this.state.todoData;
    todos.push({
      task: this.state.value,
      id: "",
      complete: ""
    });
    this.setState(
      { 
        value: "",
        todoData: todos 
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {this.state.todoData.map(todo => <TodoList todos={todo.task} />)}
        <TodoForm todo={this.changeValue} add={this.addTodo} value={this.state.value} />
      </div>
    );
  }
}

export default App;
