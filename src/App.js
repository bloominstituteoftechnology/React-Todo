import React from 'react';
import Todo from './components/TodoComponents/Todo'
import TodoList from "./components/TodoComponents/TodoList"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state={
      task: "",
      id: Date.now(),
      complete: false
    }
  }
  handleChangeFunction = event => {
    this.setState({ todo: event.target.value})
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Todo propsTodo={this.state.task} />
        <TodoList/>
        <input onChange={this.handleChangeFunction}/>
      </div>
    );
  }
}

export default App;
