import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'first item',
          id: 1528817077286,
          completed: false,
        },
        {
          task: 'second item',
          id: 1528817077287,
          completed: true,
        },
      ],
      newTodoTaskText: '',
    };
  }

  changeNewTodoTaskText(event) {
    this.setState({
      ...this.state,
      newTodoTaskText: event.target.value,
    });
  }

  addTodo(event) {
    event.preventDefault();
    this.setState({
      ...this.state,
      todos: [
        ...this.state.todos,
        {
          task: this.state.newTodoTaskText,
          id: Math.random() * Number.MAX_VALUE,
          completed: false,
        },
      ],
      newTodoTaskText: '',
    });
    event.currentTarget.querySelector('.new-task-text').value = '';
  }

  clearCompletedTasks() {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => !todo.completed),
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm
          newTodoTaskText={this.state.newTodoTaskText}
          changeNewTodoTaskText={(event) => this.changeNewTodoTaskText(event)}
          addTodo={(event) => this.addTodo(event)}
        />
        <button onClick={(event) => this.clearCompletedTasks(event)}>Clear Completed Tasks</button>
      </div>
    );
  }
}

export default App;
