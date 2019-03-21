import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todoData,
      task: '',
      // id: '',
      // completed: Boolean,
    }
  }

  handleChanges = event => {
    console.log(event.target.name, event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  updateTodoList = event => {
    event.preventDefault();

    const newList = {
      task: this.state.task,
      id: Date.now(),
      completed: false

    };

    this.setState({
      todos: [...this.state.todos, newList],
      task: '',
    });
  };


  render() {

    return (
      <div className="app-wrapper">
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoListProp={this.state.todos} />
        <TodoForm
          task={this.state.task}
          // id={this.state.id}
          // completed={this.state.completed}
          handleChanges={this.handleChanges}
          updateTodoList={this.updateTodoList}

        />
      </div>
    );
  }
}

export default App;
