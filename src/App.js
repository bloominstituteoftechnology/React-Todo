import React from 'react';
import "./components/TodoComponents/Todo.css"
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();
  this.state = {

  }
}

addObj = newObjText => {
  const newObj = {
    name: newObjText,
    id: Date.now(),
    complete: false
  }
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm/>
      </div>
    );
  }
}

export default App;
