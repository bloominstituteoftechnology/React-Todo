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
      // id: '',
      // completed: '',
    };
  }

  inputHandler = event => {
    const value = event.target.value;

    this.setState (
      {task:value}
    ); console.log(value)
  }  



  submitHandler = event => {
    event.preventDefault();

      const obj = {
        task: this.state.task,
        id: Date.now(),
        completed: false,
      }

      this.setState({
        todo: [...this.state.todo, obj],
        task: "",
      });
  }

  eraseHandler = event => {
    event.preventDefault();
    
      const obj = {
        task: this.state.task,
        id: Date.now(),
        completed: false,
      }

      this.setState({
        todo: [...this.state.todo, obj],
        task: "",
      });
  }


  render() {
    return (
      <div>
        <TodoList list={this.state.todo} />
        <TodoForm value={this.state.task} inputHandler={this.inputHandler} submitHandler={this.submitHandler} />
      </div>
    );
  }
  
}

export default App;
