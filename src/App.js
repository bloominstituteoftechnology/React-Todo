import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
      this.state = {
        todos: [],
        inputText: ""
      };
  }

  // Property

  addTodo = event => {
    event.preventDefault();
    if (this.state.inputText) { 
        this.setState({
          todos:  [...this.state.todos, this.state.inputText],
          inputText: ""
        });
    }    
  };

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    })
  };

  //form is called controlled comonent (vs. uncontrolled)

  render() {
    // this is a lifecycle hook
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm 
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
        /> 
      </div>
    );
  }
}

export default App;
