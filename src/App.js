import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleChange = event => {
    this.setState({
      todo: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.todo);
  }

  constructor() {
    super();
    this.state = {
      todo: ""
    }
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
        handleChange={this.handleChange}
        onSubmit = {this.onSubmit}
        />
      </div>
    );
  }
}

export default App;
