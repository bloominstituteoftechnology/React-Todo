import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      manyTodo: [],
      task: ""
    };
  }

  inputHander = (event) => {
    const value = event.target.value;
    this.setState({
      task: value
    })
    console.log(value)
  };

  submitHander = (event) => {
    event.preventDefault();
    const singleTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      manyTodo:[...this.state.manyTodo, singleTodo,],
      task: ""
    });
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList manyTodo={this.state.manyTodo} />
        <TodoForm inputHander={this.inputHander} submitHander ={this.submitHander} />
      </div>
    );
  }
}

export default App;

