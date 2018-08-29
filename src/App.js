import React from "react";
import ToDoForm from "./components/TodoComponents/TodoForm";
import ToDoList from "./components/TodoComponents/TodoList";
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: [],
      toDoInput: "",
      // placeholder: "...todo"
    };
  }

  addToDo = event => {
    event.preventDefault();
    if(this.state.toDoInput){
    this.setState({
      toDo: [...this.state.toDo, this.state.toDoInput],
      toDoInput: '',
    });
  };
}

  handleInput = event => {
    this.setState({
      toDoInput: event.target.value
    });
  };

  clear = event => {
    event.preventDefault();
    this.setState({
      toDo: []
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <ToDoList todo={this.state.toDo} />
        <ToDoForm
          addToDo={this.addToDo}
          toDoInput={this.state.toDoInput}
          handleInput={this.handleInput}
          clear={this.clear}
          // placeholder={this.placeholder}
        />
      </div>
    );
  }
}

export default App;
