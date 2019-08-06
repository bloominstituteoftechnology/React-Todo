import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: localStorage.getItem('todos') === null ? [] : JSON.parse(localStorage.getItem('todos')),
      newTodoTaskText: '',
    };
  }

  toggleDone = (event) => {
    const id = parseInt(event.currentTarget.dataset.id);
    const updatedTodos = this.state.todos.map((todo) => {
      
      return (
        id === todo.id
          ? {
            ...todo,
            completed: !todo.completed,
          }
          : todo
      );
    });

    this.setState({
      ...this.state,
      todos: updatedTodos,
    });

    event.currentTarget.classList.toggle('completed');
  }

  changeNewTodoTaskText = (event) => {
    this.setState({
      ...this.state,
      newTodoTaskText: event.target.value,
    });
  }

  addTodo = (event) => {
    event.preventDefault();

    const updatedTodos = [
      ...this.state.todos,
      {
        task: this.state.newTodoTaskText,
        id: Math.floor(Math.random() * 2000000000000000),
        completed: false,
      },
    ];

    this.setState({
      ...this.state,
      todos: updatedTodos,
      newTodoTaskText: '',
    });
    event.currentTarget.querySelector('.new-task-text').value = '';
  }

  clearCompletedTasks = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => !todo.completed),
    });
  }

  componentDidUpdate = () => {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          toggleDone={this.toggleDone}
        />
        <TodoForm
          newTodoTaskText={this.state.newTodoTaskText}
          changeNewTodoTaskText={this.changeNewTodoTaskText}
          addTodo={this.addTodo}
        />
        <button onClick={this.clearCompletedTasks}>Clear Completed Tasks</button>
      </div>
    );
  }
}

export default App;
