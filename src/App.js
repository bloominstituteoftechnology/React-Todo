import React from 'react';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoListArray: [],
    };
  }
  updateListInput = event => {
    this.setState({todoInput: event.target.value});
  }
  updateTodoListArray = todo => {

    this.setState({
      ...this.state,
      todoListArray: [...this.state.todoListArray, todo]

    });
  }
  submitListItem = event => {
    this.setState()
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
       <h2>Welcome to your Todo App!</h2>
       <TodoForm />
      </div>
    );
  }
}

export default App;
