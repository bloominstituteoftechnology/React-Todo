import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

const todoList = [];

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      stateTodoList: todoList,
      task: '',
      id: '',
      completed: '',
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  formSubmitHandler = event => {
    event.preventDefault();
    let newTodoTask = {
      task: this.state.task,
    };
    this.setState(prevState => {
      return {
        stateTodoList: [...prevState.stateTodoList, newTodoTask],
        task: "",
      };
    });
  };
  render() {
    return (
      <div className="listMaker">
        <div className="guts">
        <h1>The Polite To-Do List</h1>
        <h2><TodoList input={this.inputChangeHandler} task={this.state.task} submit={this.formSubmitHandler} stateTodoList={this.state.stateTodoList}/></h2>

        </div>
              </div>
          );
  }
}

export default App;