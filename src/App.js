import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';

const todo = [
  {
    task: 'Drink coffee',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Lift weights before work',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Commute to work',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Check emails and current purchase orders',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Receive all ordered products and put new inventory away',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Write orders',
    id: Date.now(),
    completed: false
  },
]
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todo
    };
  }
  addTask = (e, task) => {
    e.preventDefault();

    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log(todo);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoForm addTask={this.addTask} />
        </div>
      </div>
    );
  }
}

export default App;
