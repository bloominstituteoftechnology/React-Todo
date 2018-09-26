import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      toDoData: [
        {
          task: 'Finish TODO list',
          id: 1,
          completed: false
        },
        {
          task: 'Add more funcitonality',
          id: 2,
          completed: false
        },
        {
          task: 'Add styling',
          id: 3,
          completed: false
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h1>Todo List: MVP</h1>
        <TodoList data={this.state} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
