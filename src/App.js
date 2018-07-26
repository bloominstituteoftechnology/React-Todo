import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      myArray: [
        {
          task: 'Organize Garage',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: Date.now(),
          completed: false
        }
      ]
    };
  }

  handleInputChange = event => {

  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList array= {this.state.myArray}/>
        <TodoForm />
      </div>
    );
  }
}



export default App;
