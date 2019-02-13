import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

// const TODOLIST = [
//   {
//     task: 'first you get the sugar',
//     id: '1',
//     completed: false,
//   },
//   {
//     task: 'then you get the power',
//     id: '2',
//     completed: false,
//   },
//   {
//     task: 'then you get the women',
//     id: '3',
//     completed: false,
//   },
// ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      task: '',
      completed: false,
      todos: [],
    };
  }

  formHandler = e => {
    console.log(this.state.task);
    this.setState({
      task: e.target.value
    });
  }

  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      task: this.state.task,
      id: Date.now(),
    }
    this.setState({
      todos: [...this.state.todos, newTodo],
      task: '',
    });
  }

  render() {
    return (
      <div>
        <h2>in america</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm
          onSubmit={this.addTodo}
          onChange={this.formHandler}
          value={this.state.task}
        />
      </div>
    );
  }
}
export default App;