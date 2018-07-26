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
        list: [],
        task: '',
        completed: false
      };
    }

  inputChangeHandler = (event) => {
    this.setState({task: event.target.value});
    if(event.keyCode === 13){ 
      let copy = this.state.list.slice();
      copy.push({task: this.state.task, id: Date.now(), completed: this.state.completed})
      this.setState({list: copy})
      console.log(copy);
    }
  }

  buttonClickHandler = (event) => {
    event.preventDefault();
    let copy = this.state.list.slice();
    copy.push({task: this.state.task, id: Date.now(), completed: this.state.completed})
    this.setState({list: copy})
    console.log(copy);
  }

  handleToggleCompleted = (event) => {
    const copy = this.state.list.slice();
    copy.map(todo => {if(todo.task === event.target.innerText) {
      todo.completed =! todo.completed
    }});
    this.setState({ list: copy });
  };

  handleClearCompleted = (event) => {
    event.preventDefault();
    const copy = this.state.list.slice();
    const newTodos = copy.filter(todo => todo.completed === false);
    this.setState({list: newTodos});
  }

  render() {
    return (
      <div>
        <h2>My Todo List:</h2>
        <TodoList completedProp ={this.handleToggleCompleted}
                  toDoListProp = {this.state.list} />
        <TodoForm change = {this.inputChangeHandler}
                  click = {this.buttonClickHandler} 
                  clear ={this.handleClearCompleted}
                  />
      </div>
    );
  }
}

export default App;
