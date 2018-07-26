import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      message: ""
    };
  };

  handleUpdateState = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({
      task: this.state.message,
      id: Date.now(),
      completed: false
    });
    this.setState({ todos: todos });
  };



  handleInputChange = event => {
    this.setState({ message: event.target.value });
  };



  handleToggleCompleted = event => {
    const todos = this.state.todos.slice();
    todos.map(todo => {if(todo.task === event.target.innerText) {
      todo.completed =! todo.completed
    }});
    this.setState({ todos: todos });
  };

  handleClearCompleted = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    const newTodos = todos.filter(todo => todo.completed === false);
    this.setState({todos: newTodos});
  }


  render() {
    return (
      <div>
        <h2>Kyle's Todo List</h2>
        <TodoList completedProp ={this.handleToggleCompleted} toDoListProp={this.state.todos} />
        <TodoForm clearProp={this.handleClearCompleted} buttonProp={this.handleUpdateState} messageProp={this.handleInputChange} />
      </div>
    );
  };
};

export default App;
