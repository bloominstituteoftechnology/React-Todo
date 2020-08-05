import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1,
          completed: false
        },
        {
          task: 'Clean Room',
          id: 2,
          completed: false
        },
      ],
    };
  }

  setCompleted = todoId => {
    const todo = this.state.todos.find( todo => todo.id === parseInt(todoId));
    todo.completed = !todo.completed;
    this.setState({ ...this.state.todos, todo });
  }

  addItem = newTodo => {
    console.log(newTodo);
    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  clearCompleted = () => {
    this.setState({ todos: this.state.todos.filter( todo =>
      !todo.completed
    )})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          setCompleted={this.setCompleted}
        />
        <TodoForm
          addItem={this.addItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
