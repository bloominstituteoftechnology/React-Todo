import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todoArr={this.state.todos} />
      </div>
    );
  }
}

export default App;

// Github Pull Request:
// https://github.com/LambdaSchool/React-Todo/pull/288