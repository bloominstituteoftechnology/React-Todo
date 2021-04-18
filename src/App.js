import React from "react";
<<<<<<< HEAD
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
=======

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
>>>>>>> 5d52c623f0d15e4a8a8d99500c60f06a718d8e18

//begin with extending React.Component, call constructor, initialize super within function and set this.state = list: list
class App extends React.Component {
  constructor() {
<<<<<<< HEAD
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

=======
    super();
    this.state = {
      list: list,
    };
  }

>>>>>>> 5d52c623f0d15e4a8a8d99500c60f06a718d8e18
  toggleDone = (taskId) => {
    const newTaskList = this.state.list.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          completed: !task.completed,
<<<<<<< HEAD
          //switches boolean value of completed from false to true
=======
>>>>>>> 5d52c623f0d15e4a8a8d99500c60f06a718d8e18
        };
      } else {
        return task;
      }
    });
<<<<<<< HEAD
    //setState creating a shallow copy of this.state and add to the list newTaskList
=======

>>>>>>> 5d52c623f0d15e4a8a8d99500c60f06a718d8e18
    this.setState({
      ...this.state,
      list: newTaskList,
    });
  };

<<<<<<< HEAD
  //Change Handler = (todoTask, and event) =>

  addTodo = (todoTask, e) => {
    console.log("Add todo fired");
    const newTask = {
      // initialize a new variable names newTask with the same shape as the data required giving task: newTask, id: uuidv4 or Date.now()
=======
  addTodo = (todoTask, e) => {
    // e.preventDefault();
    console.log('fire')
    const newTask = {
>>>>>>> 5d52c623f0d15e4a8a8d99500c60f06a718d8e18
      task: todoTask,
      id: uuidv4(),
      completed: false,
    };
<<<<<<< HEAD
    //set this.setState to a shallow copy of this.state adding to list: [...this.state.list, newTask]
    this.setState({
      ...this.state,
      list: [...this.state.list, newTask],
    });
  };

  // clear todo change handler
  clearTodo = () => {
=======
    this.setState({
      ...this.state,
      list: [...this.state.list, newTask],
  
    });
  };

  clearTodo = () => {
    //console.log("clearing complete tasks");
>>>>>>> 5d52c623f0d15e4a8a8d99500c60f06a718d8e18
    this.setState({
      ...this.state,
      list: this.state.list.filter((item) => !item.completed),
    });
  };

<<<<<<< HEAD
  //render components passing addTodo to the TodoForm component and
  //clearTodo, toggleCompleted, list to the TOdoList as props

=======
>>>>>>> 5d52c623f0d15e4a8a8d99500c60f06a718d8e18
  render() {
    console.log(this.state)
    return (
<<<<<<< HEAD
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
=======
      <div className="App container d-flex flex-column justify-content-center" style={{borderRadius: '10px'}} >
        <div className="space d-flex flex-column justify-content-center" style={{margin: '3rem auto'}}>
          <h3 style={{marginTop: '3rem', fontSize: '4rem'}}>Breathe</h3>
          <h4 style={{margin: '1.5rem'}}>Personal Goal Tracker</h4>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          clearTodo={this.clearTodo}
          toggleDone={this.toggleDone}
          list={this.state.list}
>>>>>>> 5d52c623f0d15e4a8a8d99500c60f06a718d8e18
        />
      </div>
    );
  }
}

export default App;




