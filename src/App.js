import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import TodoList from "./components/TodoComponents/TodoList.js";
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
const listArr = [
  {
    task: "Ok",
    id: Date.now(),
    completed: false
  },
  {
    task: "Yes",
    id: Date.now(),
    completed: false
  },
  {
    task: "Very",
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: listArr,
      inputVal: ""
    };
  }

  updateInputVal = event => {
    const value = event.target.value;
    this.setState({ inputVal: value });
  };

  submitNewTask = event => {
    event.preventDefault();

    this.setState(prevState => ({
      list: prevState.list.concat({
        id: Date.now(),
        task: prevState.inputVal,
        completed: false
      }),
      inputVal: "",
    }));
  };

  /*  handleUpdateState = (task) => {
    const listItems = this.state.list.slice();

    listItems.push({
      id: Date.now(),
      task: this.state.inputVal,
      completed: false
    });
    this.setState({list: listItems});
  }; */

  render() {
    return (
      <div>
        <TodoList taskList={this.state.list} />
        <TodoForm
          updateInputVal={this.updateInputVal}
          submitNewTask={this.submitNewTask}
          inputVal={this.inputVal}
        />
      </div>
    );
  }
}

export default App;
