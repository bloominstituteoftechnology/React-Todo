import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./App.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      listArray: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false,
          style: "noLine"
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false,
          style: "noLine"
        }
      ],
      newTask: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewTask = event => {
    event.preventDefault();
    this.setState({
      listArray: [
        ...this.state.listArray,
        { task: this.state.newTask, style: "noLine" }
      ],
      newTask: ""
    });
  };

  finishMe = index => {
    this.setState({
      listArray: this.state.listArray.map((task, idx) => {
        if (index !== idx) {
          return task;
        } else {
          return {
            ...task,
            style: task.style === "noLine" ? "lineMe" : "noLine"
          };
        }
      })
    });
  };

  render() {
    return (
      <div className="to-do-list">
        <h1>Todo List: MVP</h1>
        <TodoForm
          changeHandler={this.changeHandler}
          addNewTask={this.addNewTask}
          newTask={this.newTask}
          listArray={this.state.listArray}
          finishMe={this.finishMe}
        />
      </div>
    );
  }
}

export default App;
