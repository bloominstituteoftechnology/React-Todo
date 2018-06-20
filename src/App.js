import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
      constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Get bloodwork done',
          id: 1,
          completed: false
        },
        {
          task: 'Make Dentist appointment',
          id: 2,
          completed: false
        },
        {
          task: '2 hours of Codewars JavaScript',
          id: 3,
          completed: false
        },
      ],
      todo: ""
    };
  }


  render() {
    return (
      <div className="container">
      <h2>To-do List</h2>
      </div>
    );
  }
}

export default App;