import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  //#region you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  //#endregion this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state={};
  }
  
  render() {
    return (
      <div>
       <TodoList />
      </div>
    );
  }
}

export default App;
