import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  formSubmitHandler = event => {
    event.preventDefault();
    let newTodo = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed,
    };
    this.setState(prevState => {
      return {
        stateTodo: [...prevState.stateTodo, newTodo],
        task: "",
        id: "",
        completed: "",
      };
    });
  };
  render() {
    return (
      <div>
        <h2><TodoList /></h2>
      </div>
    );
  }
}

export default App;
