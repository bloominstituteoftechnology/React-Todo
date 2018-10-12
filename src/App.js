import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'gardening', 
          completed: false
        },
        {
          task: 'eating food',
          completed: false
        },
        {
          task: 'walking the dog',
          completed: false
        }
      ],
    }
    this.addTodo = this.addTodo.bind(this);
    this.clearComplete = this.clearComplete.bind(this);
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  addTodo = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: '' });
  };

  changeTodo = event => this.setState({ [event.target.name]: event.target.value });

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

  clearComplete = event => {
    event.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };
  
  render() {
    return (
      <div>
        <TodoList 
          handleToggleComplete = {this.toggleTodoComplete}
          todos={this.state.todos}
         />
        <TodoForm
          value = {this.state.todo}
          handleTodoChange = {this.changeTodo}
          handleAddTodo = {this.addTodo}
          handleClearTodos = {this.clearCompletedTodos}
         />
      </div>
    );
  }
}

export default App;
// this.state.todos.map((item) => {
//   return item.task;
// })