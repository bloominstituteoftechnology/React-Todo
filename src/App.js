import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'gardening', 
          completed: false
        },
        {
          task: 'eating food',
          completed: false
        }
      ]
    }
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;
// this.state.todos.map((item) => {
//   return item.task;
// })