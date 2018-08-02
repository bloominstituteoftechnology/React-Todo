import React from "react";
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";

const dummyData = [
  {
    task: "Task One",
    id: new Date(),
    completed: false
  },
  {
    task: "Task Two",
    id: new Date(),
    completed: false
  },
  {
    task: "Task Three",
    id: new Date(),
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: dummyData,
      inputVal: ""
    };
  }

  updateInputVal = event => {
    const { value } = event.target;
    this.setState({ inputVal: value });
  };

  submitNewTask = event => {
    event.preventDefault();

    this.setState(prevState => ({
      list: prevState.list.concat({
        id: new Date(),
        task: prevState.inputVal,
        completed: false
      }),
      inputVal: ""
    }));
  };

  render() {
    return (
      <div>
        <TodoList taskList={this.state.list} />
        <TodoForm
          inputVal={this.state.inputVal}
          updateInputVal={this.updateInputVal}
          submitNewTask={this.submitNewTask}
        />
      </div>
    );
  }
}

export default App;