import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

const todos = [
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
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  // Class methods to update state
  toggleTask = (taskId) => {
    console.log("Toggling item", taskId);
    this.setState({
      // Find the item in the todos array, and toggle its purchased flag
      todos: this.state.todos.map((task) => {
        if (taskId === task.id) {
          return {
            // Return the item with purchased flag toggled
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTask]
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((task) => !task.completed)
    });
  };

  render() {
    return (

      <div className="App">
      <div className="header">
        <h1>Todo List</h1>
        
      </div>
      <TodoList
        toggleTask={this.toggleTask}
        todos={this.state.todos}
        clearCompleted={this.clearCompleted}
      />
      <TodoForm addTask={this.addTask} />
    </div>
    );
  }
}

export default App;
