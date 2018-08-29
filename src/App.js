import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      inputText: "",
      id: null,
      completed: false
    };

  }

  //property
  addTodo = event => {
    event.preventDefault();
    if(this.state.inputText){
    this.setState({
      todo: [...this.state.todo, this.state.inputText],
      inputText: ""
    });
  }
};

clearTodo = event => {
  event.preventDefault();
};

  handleInput = event => {
    this.setState({
      inputText: event.target.value,
      id: Date.now(),
      completed: false
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {

    return (
      <div>
        <TodoList todo={this.state.todo} />
        <TodoForm
          addTodo={this.addTodo}
          clearTodo={this.clearTodo}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
