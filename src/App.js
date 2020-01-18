import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";


const todos = [
  {
    task: 'Build Tent',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Pack Camping Gear',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Bake Sweets',
    id: 12345,
    completed: false
  },
  {
    task: 'Bring Kids',
    id: 54321,
    completed: false
  },
  {
    task: 'Shrink Kids',
    id: 55555,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    
    
  }

  addItem = (e, itemName) => {
    e.preventDefault();
    const exists = this.state.todos.filter(
      item => item.task === itemName);
    if (exists.length === 0) {
      const newItem = {
        task: itemName,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newItem]
      });
    }
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  };

  toggleItem = itemId => {
    this.setState({
      todos: this.state.todos.map(
        item => {
          if (item.id === itemId) {
            return { ...item, completed: !item.completed};
          }
          return item;
        })
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
          <div className="App">
          <div className="header">
            <h1>To Do List</h1>
            <TodoForm addItem={this.addItem} />
          </div>
          <TodoList
            todos={this.state.todos}
            toggleItem={this.toggleItem}
            clearCompleted={this.clearCompleted}
            />
            </div>
    );
  }
}

export default App;