import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
      task: 'Study Class Components',
      id: 152881751447,
      completed: true
  },
];

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
      id: Date.now(),
      completed: this.state.completed,
    };
    this.setState(prevState => {
      return {
        stateTodoList: [...prevState.stateTodoList, newTodoTask],
        task: "",
        id: "",
        completed: "",
      };
    });
  };
  render() {
    return (
      <div>
        <h2><TodoList input={this.inputChangeHandler} task={this.state.task} id={this.state.id} completed={this.state.completed} submit={this.formSubmitHandler} stateTodoList={this.state.stateTodoList}/></h2>
      </div>
    );
  }
}

export default App;
