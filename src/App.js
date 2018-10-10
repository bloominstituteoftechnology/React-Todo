import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      list: ['item1', 'item2', 'item3']
    };
  }



  render() {
    return (
      <div>
        <h2>TO DOS!</h2>
        <ToDoForm />
        <ToDoList todos = {this.state.list} />

      </div>
    );
  }
}

export default App;
