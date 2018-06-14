import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
      constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Get bloodwork done',
          id: 1,
          completed: false
        },
        {
          task: 'Make Dentist appointment',
          id: 2,
          completed: false
        },
        {
          task: 'Make video for Sams Birthday',
          id: 3,
          completed: false
        },
      ],
      todo: ""
    };
  }

addTodo = def => {
    def.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({todos, todo: ""});
  }

changeTodo = def => this.setState({[def.target.name]: def.target.value});

toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      else {
        return todo;
      }
    });
    this.setState({todos});
  };

clearCompletedTodos = def => {
  def.preventDefault();
  let todos = this.state.todos.slice();
  todos = todos.filter(todo => !todo.completed);
  this.setState({todos});
};

  render() {
    return (
      <div className="container">
      <h2>To-do List</h2>
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