import React from 'react';
import uuid from 'uuid';

// we need some initial data
const initialTodos = [
  {
    task: 'Organize Garage',
    id: uuid(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: uuid(),
    completed: false
  }
];

// make a function that behaves like axios.get("todosURL")
const fakeTodosEndpoint = () => {
  return Promise.resolve(initialTodos);
};

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
