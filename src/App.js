import React from 'react';
import ReactDOM from "react-dom";
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: [
        {
          todo: 'Add todo',
          id: Date.now(),
          completed: false
        }
      ],
      inputText:'',
      
    };
  }

  // property
  addTodo = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        todos: [...this.state.todos, {inputText: this.state.inputText, id: this.state.id, completed: this.state.completed}],
        id: Date.now(),
        inputText:''
      });
    }
  };

  clearCompleted = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        todos: [
          {
            todo: 'Add todo',
            id: Date.now(),
            completed: true
          }
        ],
        inputText:''
      });
    }
  }

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };


  // form is called controlled component (vs. uncontrolled)
  render() {
    // this is a lifecycle hook
    return (
      <div className="app-container">
        <h2>Todos:</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
