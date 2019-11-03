import React from 'react';
import TodoForm from './Components/TodoComponents/TodoForm'

const data = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      task: data
    }
  }

  toggleTodo(Todo) {
    console.log(Todo);
  }

  addTodo = todoName => {
    // event.preventDefault();
    this.state([

    ])
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm todo={this.state.task} addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
