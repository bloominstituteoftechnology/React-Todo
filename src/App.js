import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import "./components/Todo.css";



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoItems: []
    };
  }

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoItems: [...this.state.todoItems, newTodo]
    });
  };

  toggleTodo = todoId => {
    console.log(todoId);

    this.setState({
      todoItems: this.state.todoItems.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todoItems: this.state.todoItems.filter(todo => !todo.completed)

    });
  };

  render() {
    console.log('rendering...');
    return (
      <div className="App">
      <div className="header">
        <h1>Todo List!</h1>
        <TodoForm addTodo={this.addTodo} />
      </div>
      <TodoList
      todoItems={this.state.todoItems}
      toggleTodo={this.toggleTodo}
      clearCompleted={this.clearCompleted}
      />
      </div>
    );
  }
}

export default App;
