import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';

const todo = [
  {
    id: 111,
    name: 'Walk the Dog',
  },
  {
    id: 222,
    name: 'Take out trash',
  },
  {
    id: 333,
    name: 'Was dishes',
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
      this.state = {
        todo: todo,
      };
  };
 
  render() {
    return (
      <div>
        <h2>Todo List!</h2>
        <Todo todo={this.state.todo}/>
        <TodoForm />
      </div>
    );
  }
};

export default App;
