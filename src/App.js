import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = { 
      Todos: [
        { task: 'Bake Cookies', id: 1, completed: false },
        { task: 'Prep Cookies for Delivery', id: 2, completed: false },
        { task: 'Deliver Cookies', id: 3, completed: false },
      ],
      Todo: '', 
    };
  }
  
  render() {
    return (
      <div>
        <TodoForm />

        {this.state.Todos.map(param =>
          <div key={param.id}>{param.task}</div>
          )}
      </div>
    );
  }
}

export default App;
