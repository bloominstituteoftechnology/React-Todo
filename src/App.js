import React from 'react';
import Todo from "./components/TodoComponents/Todo";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
// import Todo.css from "./Todo.css";


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
    super();
    this.state = {
      todos: [
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
      ],
      todo: ""
    };
  }
    addTodo = e => {
     e.preventDefault();
     const todos = this.state.todos.slice();
     todos.push({ task: this.state.todo, completed: false, id: Date.now() });
     this.setState({ todos, todo: "" });
    };

    changeTodo = e => this.setState({ [e.target.name]: e.target.value });

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

    clearCompletedTodos = e => {
      e.preventDefault();
      let todos = this.state.todos.slice();
      todos = todos.filter(todo => !todo.completed);
      this.setState({ todos });
    };

  render() {
    return (
      <div className="container">
        <h2>My To Do List</h2>
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