import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
const todo = [
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
      todo: todo,
      task: ""
    };
  };
  toggleCompleted = clickedItemId => {
    this.setState({
      todo: this.state.todo.map(task => {
        if (task.id === clickedItemId) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };
  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      <TodoList todo={this.state.todo} toggleCompleted={this.toggleCompleted}/>
      <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
