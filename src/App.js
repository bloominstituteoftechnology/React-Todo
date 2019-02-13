import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ""
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();
    if (this.state.todo) {
      const newTodos = [...this.state.todos];
      newTodos.push({
        task: this.state.todo,
        completed: false,
        id: Date.now()
      });
      this.setState({
        todos: newTodos,
        todo: ""
      });
    }
  };

  toggleTodoComplete = id => {
    let newTodos = [...this.state.todos];
    newTodos = newTodos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos: newTodos });
  };

  clearCompletedTodos = event => {
    event.preventDefault();
    let todos = [...this.state.todos];
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };
  render() {
    return (
      <div>
        <h2>TodoList: MVP</h2>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm
          addTodo={this.addTodo}
          todo={this.state.todo}
          handleInput={this.handleInput}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}
//   render() {
//     return (
//       <div>
//         <h2>Welcome to your Todo App!</h2>
//         <Todo />
//       </div>
//     );
//   }
// }

export default App;
