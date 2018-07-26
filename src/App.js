import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state



  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        list: [{task: '', id: Date.now(), completed: false}]
      };
    }

  inputChangeHandler = (event) => {
    this.setState({task: event.target.value});
  }

  onEnterHandler = (event) => {
    event.preventDefault();
    let copy = this.state.list.slice();
    if(event.keyCode === 13){ 
      copy.push({task: this.state.task, id: Date.now(), completed: false})
      this.setState({list: copy})
    }
  }

  buttonClickHandler = (event) => {
    event.preventDefault();
    let copy = this.state.list.slice();
    copy.push({task: this.state.task, id: Date.now(), completed: false})
    this.setState({list: copy})
  }

  render() {
    return (
      <div>
        <h2>My Todo List:</h2>
        <TodoList list = {this.state.list}/>
        <TodoForm change = {this.inputChangeHandler}
                  click = {this.buttonClickHandler}
                  enter = {this.onEnterHandler} />
      </div>
    );
  }

}

export default App;
