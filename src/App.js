import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const toDoListArray = [
  
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      task: toDoListArray,
      id: Date.now(),
      completed: false,
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      task: [
        ...this.state.task,
        {task: this.state.inputText, id: Date.now(), complete: false}
      ],
      inputText: ''
    });
  }

  // clearTodo = event => {
  //   event.preventDefault();
  //   document.getElementById('todo-list').reset();
  // }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div className="todo-list">
        <TodoList task={this.state.task} />
        <TodoForm 
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          clearTodo={this.clearTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
