import React from 'react';

import './components/TodoComponents/Todo.css'
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

//Adding Data

const todoData = [
  
  {
    task: 'Meal Prep',
    id: 2001,
    completed: false,
  },

  {
    task: 'Do Laundry',
    id: 2002,
    completed: false,
  },

  {
    task: 'Learn React Class Components',
    id: 2003,
    completed: false,
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
      this.state = {
        todo: todoData
      };
  }

  toggleItem = id => {
    console.log(id);

    // this.setState({
    //   todo: this.state.todo.map(task => {
    //     if(task.id === id) {
    //       return {
    //         ...task,
    //         completed: !task.completed
    //       };
    //     } else {
    //       return task;
    //     }
    //   })
    // })
  }

  addItem = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    })
  }

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Todo List!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList 
          todo={this.state.todo} 
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
