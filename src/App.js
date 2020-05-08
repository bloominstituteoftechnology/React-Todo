import React from "react";


import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/styles.css";

const todo =  [
  {
    task: 'Watch Coding Tutorial',
    id: 123,
    completed: false
  },
  {
    task: 'Update Resume',
    id: 456,
    completed: false
  },
  {
    task: 'Attend Meetup',
    id: 789,
    completed: false
  },
  {
    task: 'Write Code Daily',
    id: 147,
    completed: false
  },
  {
    task: 'Contribute to Open Source Project',
    id: 258,
    completed: false
  },
  {
    task: 'Create Portfolio Website',
    id: 369,
    completed: false
  },
  {
    task: 'Attend Class',
    id: 159,
    completed: false
  },
  {
    task: 'Network on LinkedIn',
    id: 951,
    completed: false
  }
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      todo, // same as todo: todo
 
    };
  }

  // Class methods to update state
  toggleTaskCompleted = taskId => {
    // console.log("bk: index.js: App: toggleItemPurchased: itemId: ", itemId);
    this.setState({
      todo: this.state.todo.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  addNewTask = taskName => {
    
    this.setState({
      todo: [
        ...this.state.todo,
        { task: taskName, completed: false, id: Date.now() }
      ]
    });
  };

  clearCompleted = () => {
   
    this.setState({
      todo: this.state.todo.filter(task => {
        return !task.completed;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Todo List</h2>
          <TodoForm addNewTask={this.addNewTask} />
        </div>
        <TodoList
          toggleTaskCompleted={this.toggleTaskCompleted}
          todo={this.state.todo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}


export default App;
