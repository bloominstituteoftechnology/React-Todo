import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();

    this.state = {
      // Setup base list of todo items. Needs timestamp id, task & completed flag.
      todoList: [
        { id: 1528817077286, task: "Organize Garage", completed: false },
        { id: 1528817084358, task: "Bake Cookies", completed: true },
      ],
      textVal: ""
    };
  }

  // Event handler for entering new items.
  handleNewEntry = event => {
    if( event.keyCode === 13 ){
      let oldState = this.state.todoList;
      oldState.push({
        id: Date.now(),
        task: event.target.value,
        completed: false
      });
      this.setState({
        todoList: oldState,
        textVal: ""
      });
      event.target.value = "";
    } else {
      console.log(event.target.value);
      this.setState({
        textVal: event.target.value
      });
    }
  };

  handleClick = event => {
    let oldState = this.state.todoList;
    oldState.push({
      id: Date.now(),
      task: this.state.textVal,
      completed: false
    });
    this.setState({
      todoList: oldState,
      textVal: ""
    });
    document.querySelector('input').value = "";
  };

  render() {
    return (
      <div>
        <h2>ToDo List</h2>
        <TodoList todoArray={this.state.todoList} />
        <TodoForm newEntry={this.handleNewEntry} clickEntry={this.handleClick} />
      </div>
    );
  }
}

export default App;
