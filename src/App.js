import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      listArray: [{ toDo: "Bake Cookies" }],
      newTask: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewTask = event => {
    event.preventDefault();
    this.setState({
      listArray: [...this.state.listArray, { toDo: this.state.newTask }],
      newTask: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoForm
          changeHandler={this.changeHandler}
          addNewTask={this.addNewTask}
          newTask={this.state.newTask}
          listArray={this.state.listArray}
        />
      </div>
    );
  }
}

export default App;
