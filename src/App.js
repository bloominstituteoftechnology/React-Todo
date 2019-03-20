import React, { Component } from 'react';
import uuid from 'uuid';
import Todos, { AddTodo } from './components/Todos';
import '../node_modules/bulma/css/bulma.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'code some',
        completed: false,
      },
      {
        id: uuid.v4(),
        title: 'code more',
        completed: false,
      },
      {
        id: uuid.v4(),
        title: 'keep coding',
        completed: false,
      },
    ],
  };

  markComplete = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = id => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos.filter(todo => todo.id !== id)],
    });
  };

  addTodo = title => {
    const { todos } = this.state;
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...todos, newTodo] });
  };

  render() {
    const {
      state: { todos },
      markComplete,
      delTodo,
    } = this;
    return (
      <div className="App constainer">
        <h2>Welcome to your Todo App!</h2>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={todos} markComplete={markComplete} delTodo={delTodo} />
      </div>
    );
  }
}

export default App;
