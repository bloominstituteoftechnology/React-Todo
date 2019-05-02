import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// import "./Todo.css";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'finish homework',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'do dishes',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = e => {
    e.preventDefault();
    if (this.state.todo) {
      const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
      this.setState({
        todos: [...this.state.todos, newTodo],
        todo: ''
      });
    }
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
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List : MVP</h1>
          <TodoForm
            value={this.state.todo}
            handleTodoChange={this.changeTodo}
            handleAddTodo={this.addTodo}
          />
        </div>



        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <button className="clear-btn" onClick={this.clearCompletedTodos}>Clear Completed</button>
      </div>
    );
  }
}

export default App;