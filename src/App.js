import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./components/TodoComponents/Todo.css";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ],

      newTodo: ""
    };
  }

  changeHandler = event => {
    this.setState({
      newTodo: event.target.value
    });
  };

  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          task: this.state.newTodo,
          id: Date.now(),
          completed: false
        }
      ],
      newTodo: ""
    });
  };

  toggleComplete = event => {
    //this works but changes the class of the individual button. I want to write it
    //so the `completed` status for the particular task in todoList gets changed
    if (event.target.className === "incomplete") {
      event.target.className = "complete";
    } else {
      event.target.className = "incomplete";
    }

    //instead, write this new version: create a copy of the todoList array,
    //where the only modification is that the clicked item's `completed`
    //value changes. then use setState({todoList: newArray})
  };

  filterComplete = event => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <TodoList
          todoList={this.state.todoList}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          filterComplete={this.filterComplete}
          addNewTodo={this.addNewTodo}
          changeHandler={this.changeHandler}
          newTodo={this.state.newTodo}
          todoList={this.state.todoList}
        />
      </div>
    );
  }
}

export default App;
