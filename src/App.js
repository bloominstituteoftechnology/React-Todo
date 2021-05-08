import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from "./components/TodoList"
import Todo from "./components/Todo"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoListArray: todoListArray
    }
  }
  // updateListInput = event => {
  //   this.setState({todoInput: event.target.value});
  // }
  addItem = newItemName => {
    this.setState({
      todoListArray: [...this.state.todoListArray, {
        name: newItemName,
        id: Date.now(),
        completed: false
      }]

    })
  }
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
       <h2>Welcome to your Todo App!</h2>
       <TodoForm addItem={this.addItem}/>
       <TodoList todoListArray={this.state.todoListArray} />
      </div>
    );
  }
}

export default App;
