import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
        task: 'Learn how to use React',
        id:1,
        completed: false
        },
        {
        task: 'Go for a walk',
        id: 2,
        completed: false
        },
        // {
        // task: 'Try, try again',
        // id: Date.now(),
        // completed: false
        //   }
      ],
      todo: ''
    };
  }

  addTodo = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState ({ todos, todo: '' });
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
      <div>
        <h2>What do you need to do?</h2>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
          />
        <TodoForm 
          value={this.state.todo}
          handleChange={this.changeTodo}
          handleAdd={this.addTodo}
          handleDeleteTodo={this.clearCompletedTodos}
          />
      </div>
    );
  }
}

export default App;


  // const element = <App />;

//  ReactDOM.render(element, document.getElementById("root"));