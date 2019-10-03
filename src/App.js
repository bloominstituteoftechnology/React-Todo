import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {

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
      ]
    }
  }

  toggleTodo = (event, todoId) => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  clearCompleted = event => {
    event.preventDefault();

    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.purchased;
      })
    });
  };

  addTodo = (event, todoName) => {
    const newTodo = {
      id: Date.now(),
      task: todoName,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div>
      <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
      </div>
      <div>
        {this.state.todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onClick={e => this.toggleTodo(e, todo.id)}
          />
        ))}
      </div>
      </div> 
      )

  }
}

export default App;
