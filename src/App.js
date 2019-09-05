import React from "react";
import ReactDOM from "react-dom";

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

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
  constructor() {
    super();
    this.state = {
      todo 
    };
  }


  addItem = (e, itemName) => {
    e.preventDefault();
    const existing = this.state.todo.filter(
      item => item.name === itemName
    );
    if (existing.length === 0) {
      const newItem = {
        name: itemName,
        id: Date.now(),
        purchased: false
      };
      this.setState({
        todo: [...this.state.todo, newItem]
      });
    }
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    });
  };

  toggleItem = itemId => {


    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === itemId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    });
  };

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
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