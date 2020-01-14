import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const tasks = [
  {
    task: "Fix ceiling light",
    id: 1,
    completed: false
  },
  {
    task: "Eat homemade tamales",
    id: 2,
    completed: false
  },
  {
    task: "Play videogames with friends",
    id: 3,
    completed: false
  },
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: tasks,
    };
  }

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      done: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  };

  render() {
    return (
      <div>
        <h2>My Todo List</h2>
        <TodoList 
          addItem = {this.state.tasks} 
          toggleItem = {this.toggleItem}/>
        <TodoForm 
          addItem = {this.AddItem}/>
      </div>
    );
  }
}

export default App;
