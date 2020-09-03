import React from 'react';
import "./components/Todo.css";
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todo = [
  {
    name: "To Do Project",
    id: 12,
    completed: false,
  },

  {
    name: "Sorting Hat Project",
    id: 13,
    completed: false,
  },

  {
    name: "Careers Project",
    id: 14,
    completed: false,
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo:todo
    };
  }

  toggleItem = (itemId) => {
    this.setState({
      todo: this.state.todo.map((item) => {
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted =() => {
    this.setState({
      todo: this.state.todo.filter((item) => {

        return !item.completed;
      })
    });
  };

  addItem = (itemName) => {
    console.log("bk:index.js; App: itemName:", itemName);
    this.setState({
      todo: [
        ...this.state.todo,
        {id: Date.now(), name: itemName, completed: false }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList
        todo={this.state.todo}
        toggleItem={this.toggleItem}
         clearCompleted={this.clearCompleted}/> 
        </div>
      
    );
  }
}

export default App;
