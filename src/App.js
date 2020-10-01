import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todo = [
  {
    name: "Style Page",
    id: 123,
    completed: false
  },
  {
    name: "Finish MVP",
    id: 1234,
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
      todo
    };
  };

  toggleTask = (taskId) => {
    console.log("Item", taskId);
    this.setState({
      todoList: this.state.todo.map((task) => {
        if(taskId === task.id) {
          return {
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
      name: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state, 
      todo: [ ...this.state.todo, newTask]
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    console.log("cleared");
    this.setState({
      ...this.state,
      todoList: this.state.todo.filter(task => !task.completed)
    });
  };


  render() {
    return (
      <div className="App" >

        <div className="header" >

          <h2>Welcome to your Todo App!</h2>

          <TodoList 
            todo={this.state.todo}
            toggleTask={this.toggleTask}
            clearCompleted={this.clearCompleted}
          />

        </div>

        <TodoForm
          addTask={this.addTask}
        />

      </div>
    );
  }
}

export default App;
