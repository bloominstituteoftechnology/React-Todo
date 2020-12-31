import React from 'react';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //- `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
  //- All of your application data will be stored here on `<App />`.
  //- All of your `handler` functions should live here on `<App />`.
  render() {



    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;
