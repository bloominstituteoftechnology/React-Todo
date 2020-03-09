import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [
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
    // initialize component state
    super(); // this.state, this.setState, lifecycle methods
    this.state = {
      tasks, // shorthand for groceries: groceries
      // task: '',
      task: ''
    };
  }

  // Class methods to update state
  toggleCompleted = clickedItemId => {
    // this.state.groceries[3].purchased = true
    // NEVER DO THAT ^^^
    // recreate the entire object/array (immutability)
    // arrays -> ... (spread operator), OR immutable array methods
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === clickedItemId) {
          return {
            ...item,
            // name: 'Raw Honey',
            // id: 1237,
            // purchased: false,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addTask = taskName => {
    console.log(taskName)
    // add a new item to the groceries state
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className='App'>
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
        
        <div className='header'>
          <h2>To-Do List</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
