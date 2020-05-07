import React from 'react';
import ReactDom from "react-dom";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todo = [
  {
    task: 'Type up Notion Notes',
    id: 1,
    completed: false
  },
  {
    task: 'Wes Bos Javascript30',
    id: 2,
    completed: false
  },
  {
    task: 'Go Back and do stretches on assignments and sprints',
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  
  constructor(){
    super();
    this.state ={
      todo
    };
  }
  
  toggleItemCompleted = taskId => {
    console.log("bk: index.js: App: toggleItemCompleted: taskId: ", taskId);
    this.setState({
      todo:
      this.state.todo.map(task => {
        if (taskId === task.id) {
          return {
            ...task, completed: !task.completed
          };
        }
        else {
           return task;
      }
      
      })
    });
  };

  addTask = taskName => {
    console.log("bk: index.js: App: addTask: taskName: ", taskName);
    this.setState({
      todo: [
        ...this.state.todo,{ task: taskName, completed: false, id: Date.now() }
      ]
    });
  };

  clearCompleted = ()=>{
    console.log("bk:index.js: clearCompleted");
    this.setState({
      todo: this.state.todo.filter(task => {
        return !task.completed;
      })
    });
  };

  render() {
    return (
      <div>
        <h2>To-Do List!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList
          toggleItemCompleted={this.toggleItemCompleted}
          todo = {this.state.todo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
