import React from "react";
import List from "./components/TodoComponents/TodoList";
import Form from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {

      toDo: [
        
        { listItem: "Learn React", done: false },
        { listItem: "Write code", done: false },
        { listItem: "Sleep for an hour", done: false }
      ],
      inputText: ""
    };
  }

  crossOff = e => {
    let index = e.target.id;
    let toDo = Object.assign([], this.state.toDo);
    toDo[index].done = !toDo[index].done;
    this.setState({ toDo: toDo });
  };

  addItem = e => {
    e.preventDefault();
    let input = this.state.inputText;

    this.setState({
      toDo: [...this.state.toDo, { listItem: input, done: false }],
      inputText: ""
    });
  };

  fillIn = e => {
    this.setState({ inputText: e.target.value });
  };

  removeChecked = e => {
    let toDo = Object.assign([], this.state.toDo);
    toDo = toDo.filter(x => !x.done);
    this.setState({ toDo: toDo });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <List
          toDo={this.state.toDo}
          crossOff={this.crossOff}
          removeChecked={this.removeChecked}
        />
        <Form
          addItem={this.addItem}
          fillIn={this.fillIn}
          inputText={this.state.inputText}
        />
      </div>
    );
  }
}

export default App;
