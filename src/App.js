import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import image from '../src/back.jpg';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Finish my proj',
          id: 1,
          completed: false
        },
      ],
      todo: ''
    };
  }
  addTodo = Sent => {
    Sent.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({ 
      todos: [...this.state.todos, newTodo], 
      todo: '' 
    });
  };

  changeTodo = sent => this.setState({ [sent.target.name]: sent.target.value });

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompletedTodos = sent => {
    sent.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div className ="todo">
      <h1>TO-DO list</h1>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;
