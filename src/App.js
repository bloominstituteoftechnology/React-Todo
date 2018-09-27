import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: [{task:'Sleep', id:'',completed:false,}],
      task: '',
    };
  }

  inputHandler = event => {
    const value = this.target.value;

    this.setState (
      {task:value}
    );
  }  

  submitHandler = event => {
      const obj = {
        
      }
  }
  render() {
    return (
      <div>
        <TodoForm value={this.state.task} onChange={this.inputHandler} />
        <TodoList list={this.state.todo} />
      </div>
    );
  }
  
}

export default App;
