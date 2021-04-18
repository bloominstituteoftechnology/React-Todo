import React from "react";
import { v4 as uuidv4 } from "uuid";
//style sheets
import "./stylesheets/Todo.css";
import "bootstrap/dist/css/bootstrap.css";
//component import
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
//import initialState
import list from "./initialStates/initialList";
//import Material UI
import AppBar from "@material-ui/core/AppBar";

//begin with extending React.Component, call constructor, initialize super within function and set this.state = list: list
class App extends React.Component {
  constructor() {
    //initialize State
    super(); //initialize super()
    this.state = {
      list: list,
    };
    console.log(
      "initialState from App.js",
      list,
      "initialized state",
      this.state.list
    );
  }

  //Completed item toggle initializes function taking in taskId. mapping through it and if taskId === task.id return a shallow slice of previous state and add complete: !task.completed else return the task

  toggleDone = (taskId) => {
    const newTaskList = this.state.list.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          completed: !task.completed,
          //switches boolean value of completed from false to true
        };
      } else {
        return task;
      }
    });
    //setState creating a shallow copy of this.state and add to the list newTaskList
    this.setState({
      ...this.state,
      list: newTaskList,
    });
  };

  //Change Handler = (todoTask, and event) =>

  addTodo = (todoTask, e) => {
    console.log("Add todo fired");
    const newTask = {
      // initialize a new variable names newTask with the same shape as the data required giving task: newTask, id: uuidv4 or Date.now()
      task: todoTask,
      id: uuidv4(),
      completed: false,
    };
    //set this.setState to a shallow copy of this.state adding to list: [...this.state.list, newTask]
    this.setState({
      ...this.state,
      list: [...this.state.list, newTask],
    });
  };

  // clear todo change handler
  clearTodo = () => {
    this.setState({
      ...this.state,
      list: this.state.list.filter((item) => !item.completed),
    });
  };

  //render components passing addTodo to the TodoForm component and
  //clearTodo, toggleCompleted, list to the TOdoList as props

  render() {
    return (
      <div className="d-flex flex-column flex-wrap justify-content-center align-content-center wrapper">
        <AppBar
          className="d-flex flex-row flex-wrap justify-content-between"
          position='fixed'
          style={{ backgroundColor: "#222", boxShadow: "0 0 1.5rem black" , textAlign: 'center'}}
        >
          <h2>Star Wars Todo </h2>
          <TodoForm addTodo={this.addTodo} />
        </AppBar>

        <TodoList
          list={this.state.list}
          toggleDone={this.toggleDone}
          clearTodo={this.clearTodo}
          completed={this.state.list.completed}
        />
      </div>
    );
  }
}

export default App;
