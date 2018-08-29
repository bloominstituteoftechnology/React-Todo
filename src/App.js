import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todo: [],
      input: ""
    };
  }

  addTodo = event => {
    event.preventDefault();
    if (this.state.input) {
      this.setState({
        todo: [...this.state.todo, this.state.input],
        input: ""
      });
    }
  };

  handleInput = event => {
    this.setState({
      input: event.target.value
    });
  };

  clearList = event => {
    event.preventDefault();
    this.setState({
      todo: [],
      input: ""
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
      input = {this.state.input}
      handleInput={this.handleInput}
      />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
