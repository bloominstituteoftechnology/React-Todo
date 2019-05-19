import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoData = [

];

class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      todos: todoData,
      inputText : ""
    };
  
    }
  
  handleChange= event => {
    this.setState({inputText:event.target.value})
  }

  handleClick = event => {
    event.preventDefault()

    const newToDo = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newToDo],
      inputText: ""
    });
  }
  
  clearComplete = event => {
    event.preventDefault()
    let todos = this.state.todos.filter(todo=> !todo.completed);
    this.setState({todos});
  };
  
  toggleComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };
  
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoForm handleChange={this.handleChange}
        inputText = {this.state.inputText}
        handleClick = {this.handleClick} 
        clearComplete= {this.clearComplete}/>
        <TodoList todoItems = {this.state.todos}
        toggle={this.toggleComplete}/>
      </div>
    );
  }
}

export default App;
