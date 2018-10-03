// <App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
// - All of your application data will be stored here on `<App />`.
// - All of your `handler` functions should live here on `<App />`

import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoArr = [ 'start late', 'go slow', 'taper off'];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {todoArr: todoArr};
  }
  render() {
    console.log('state', this.state);
    return (
      <div>
        <h2>Take heart!</h2>
        <Todo passedData={this.state.test}/>
        <TodoList todoArr={this.state.todoArr}/>
        <TodoForm/>
      </div>
    );
  }
}

export default App;
