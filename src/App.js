import React from "react";

import { v4 as uuidv4 } from "uuid";
import "./components/Todo.css";
import "bootstrap/dist/css/bootstrap.css";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const list = [
  {
    task: "Go to the Gym",
    id: uuidv4(),
    completed: false,
  },
  {
    task: "Sleep 8 hours",
    id: uuidv4(),
    completed: false,
  },
  {
    task: "Spend lots of quality time with the girls",
    id: uuidv4(),
    completed: false,
  },
  {
    task: "Enjoy Life",
    id: uuidv4(),
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: list,
    };
  }

  toggleDone = (taskId) => {
    const newTaskList = this.state.list.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          completed: !task.completed,
        };
      } else {
        return task;
      }
    });

    this.setState({
      ...this.state,
      list: newTaskList,
    });
  };

  addTodo = (todoTask, e) => {
    // e.preventDefault();
    console.log('fire')
    const newTask = {
      task: todoTask,
      id: uuidv4(),
      completed: false,
    };
    this.setState({
      ...this.state,
      list: [...this.state.list, newTask],
  
    });
  };

  clearTodo = () => {
    //console.log("clearing complete tasks");
    this.setState({
      ...this.state,
      list: this.state.list.filter((item) => !item.completed),
    });
  };

  render() {
    console.log(this.state)
    return (
      <div className="App container d-flex flex-column justify-content-center" style={{borderRadius: '10px'}} >
        <div className="space d-flex flex-column justify-content-center" style={{margin: '3rem auto'}}>
          <h2 className="display-4" style={{marginTop: '3rem'}}>Shadowbox</h2>
          <h4 style={{margin: '1.5rem'}}>Personal Goal Tracker</h4>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          clearTodo={this.clearTodo}
          toggleDone={this.toggleDone}
          list={this.state.list}
        />
      </div>
    );
  }
}

export default App;




