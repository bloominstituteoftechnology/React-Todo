import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todo: [],
      inputs: ""
    };
  }

  addTodo = event => {
    event.preventDefault();
    if (this.state.inputs) {
      this.setState({
        todo: [...this.state.todo, this.state.inputs],
        inputs: ""
      });
    }
  };

  handleInput = event => {
    this.setState({
      inputs: event.target.value
    });
  };

  clearList = event => {
    event.preventDefault();
    this.setState({
      todo: [],
      inputs: ""
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
      inputs = {this.state.inputs}
      handleInput={this.handleInput}
      />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
