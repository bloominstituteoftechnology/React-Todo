import React from 'react';
import './App.css';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(){
      super();
      this.state = {
        todos: [
          {
            task: 'Fold Laundry',
          },
          {
            task: 'Wash Car',
          },
        ],
        todo: ''
      };
    }

    handleUpdateState = () => {
      const totos = this.state.todos.slice();
    }
 
  render() {
    return (
      <div className = "container">
        <h1>List of Tasks</h1>
        <TodoForm />
      </div>
    );
  }
}

export default App;
