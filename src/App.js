import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import data from './data';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: data,
    };
  }

  addTodoHandler = (todoName) => {
    const todo = {
      name: todoName,
      id: this.state.tasks.length,
      completed: false,
    };

    const newTasks = [...this.state.tasks, todo];

    this.setState({ tasks: newTasks });
  };

  toggleHandler = (todoId) => {
    this.setState({
      tasks: this.state.tasks.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div>
        <h1>2Du</h1>
        <TodoForm addTodo={this.addTodoHandler} />
        <TodoList toggleHandler={this.toggleHandler} tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
