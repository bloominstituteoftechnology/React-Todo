import React from 'react';
import TodoForm from './components/TodoForm'; 
import TodoList from './components/TodoList'; 
import './components/Todo.css'

// In this file we are going to set up: State management to contain the items on the to do list, and render the list items, form to add items and a way to toggle or otherwise manipulate the list 

const todos=[
  {
  task: "Take notes", 
  id: 1, 
  completed: false
  }, 
  {
  task: "Do the dishes", 
  id: 2, 
  completed: false
  },
  {
  task: "10 minutes JS practice", 
  id: 3, 
  completed: false
  }, 
  {
  task: "Fold laundry", 
  id: 4, 
  completed: false
  }, 
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // set up state management: 
  constructor() {
    super(); 
    this.state={todos};
  }
  //add toggle functionality on todo items 
  toggleTask = (id) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item; 
        }
      })
    });
  };

  addItem = taskName => {
    const newTask = {
      task: taskName, 
      id: new Date(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  };

  handleRemove = () => {
    const newTodos = this.state.todos.filter((item) => !item.completed);
    this.setState({
      todos: newTodos
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Your To-Do List</h2>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList
        toggleTask={this.toggleTask} 
        todos={this.state.todos}
        handleRemove={this.handleRemove}
        />   
      </div>
    );
  }
}

export default App;
