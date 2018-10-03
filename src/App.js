import React from 'react';
import ToDoList from './components/ToDoComponents/ToDoList.js';
import ToDoForm from './components/ToDoComponents/ToDoForm.js';

class App extends React.Component {
  constructor(init) {
    super(...arguments);
    this.state = {
      toDo: []
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>To Do List: MVP!</h2>
        <ToDoList toDo={this.state.toDo}/>
        <ToDoForm
          handlerAdd={this.add}
          handlerClear={this.clear}
        />
      </div>
    );
  }
  add = eventClick => {
    eventClick.preventDefault();
  }
  clear = eventClick => {
    eventClick.preventDefault();
  }
}

export default App;
