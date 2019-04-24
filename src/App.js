import React from "react";
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  state = {
    toDo: "", //could be an object that takes id and name
    list: []
  };

  textChangeHandler = event => {
    this.setState({ toDo: event.target.value });
  };

  enterItemHandler = () => {
    //copy state
    const ToDos = [...this.state.list];

    //create new task
    const newToDo = this.state.toDo.toString();

    // const newToDo = {
    //   task: this.state.toDo.toString(),
    //   id: Date.now(),
    //   completed: false
    // } 

    //add task to state
    ToDos.push(newToDo);

    //set state
    this.setState((this.state.list = ToDos)); // format the obj with all props here and set into an array

    //clear Todo
    this.setState((this.state.toDo = []));

    //clear field
  };

  emptyListHandler = () => {
    this.setState({ list: [] });
  };

  render() {
    return (
      <div>
        <TodoForm
          textChange={this.textChangeHandler}
          enterItem={this.enterItemHandler}
          emptyList={this.emptyListHandler}
          info={this.state.toDo}
        />
        <TodoList list={this.state.list} />
        {console.log("app.js", this.state.list)}
      </div>
    );
  }
}

export default App;
