import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
  // todos: [
  //   {
  //     task: 'first item',
  //     id: 1528817077286,
  //     completed: false,
  //   },
  //   {
  //     task: 'second item',
  //     id: 1528817077287,
  //     completed: true,
  //   },
  // ],

class App extends React.Component {
  constructor() {
    super();
    console.log(localStorage.getItem('todos'));
    this.state = {
      todos: localStorage.getItem('todos') === null ? [] : JSON.parse(localStorage.getItem('todos')),
      newTodoTaskText: '',
    };
  }

  toggleDone(event) {
    const id = parseInt(event.currentTarget.dataset.id);
    const updatedTodos = this.state.todos.map((todo) => {
      console.log(`id ${id} todoId ${todo.id}`);
      
      return (
        id === todo.id
          ? {
            ...todo,
            completed: !todo.completed,
          }
          : todo
      );
    });

    console.log(updatedTodos);
    
    this.setState({
      ...this.state,
      todos: updatedTodos,
    });

    event.currentTarget.classList.toggle('completed');
  }

  changeNewTodoTaskText(event) {
    this.setState({
      ...this.state,
      newTodoTaskText: event.target.value,
    });
  }

  addTodo(event) {
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
    // localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  clearCompletedTasks() {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => !todo.completed),
    });
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          toggleDone={(event) => this.toggleDone(event)}
        />
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
