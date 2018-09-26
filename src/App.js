import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import Todo from "./components/TodoComponents/Todo";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      task: ""
    };
  }

  inputHander = event => {
    const value = event.target.value;
    this.setState({
      task: value
    });
  };

  submitHander = event => {
    event.preventDefault();
    const singleTodo = {
      task: this.state.task,
      id: date.now(),
      completed: false
    };

    this.setState({
      todos:[singleTodo,],
      task: ""
    });
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <Todo />
      </div>
    );
  }
}

export default App;
