import React from "react";
import List from "./components/TodoComponents/TodoList";
import Form from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.history = [];

    this.state = {
      toDo: [
        { listItem: "Learn React", done: false },
        { listItem: "Write code", done: false },
        { listItem: "Sleep for an hour", done: false }
      ],
      inputText: "",
      inputSearch: "",
      count: 0
    };
  }

  crossOff = e => {
    let index = e.target.id;
    let toDo = Object.assign([], this.state.toDo);
    toDo[index].done = !toDo[index].done;
    this.setState({ toDo: toDo });
  };

  updateHistory = () => {
    this.history.push(JSON.stringify(this.state));
  };

  addItem = e => {
    e.preventDefault();
    let input = this.state.inputText;

    this.setState({
      toDo: [...this.state.toDo, { listItem: input, done: false }],
      inputText: "",
      inputSearch: "",
      count: 0
    });
    this.updateHistory();
  };

  fillIn = e => {
    this.setState({ inputText: e.target.value });
  };

  removeChecked = e => {
    let toDo = Object.assign([], this.state.toDo);
    toDo = toDo.filter(x => !x.done);
    this.setState({ toDo: toDo });
    this.updateHistory();
  };

  undo = (count = 1) => {
    if (!this.history[0]) {
      return;
    }
    let backLength = this.history.length - count;
    let lastState;
    if (backLength <= 1) {
      lastState = this.history[0];
    } else {
      this.history = this.history.slice(0, backLength);
      lastState = this.history[this.history.length - 1];
    }
    console.log(this.history, lastState);
    this.setState(JSON.parse(lastState));
  };

  search = e => {
    let input = e.target.value;
    let count = this.state.count + 1;
    this.updateHistory();
    this.undo(this.state.count);
    if (input) {
      this.updateHistory();
      let filtered = this.state.toDo.filter(
        item =>
          item.listItem.slice(0, input.length).toLowerCase() ===
          input.toLowerCase()
      );
      this.setState({ inputSearch: input, count: count, toDo: filtered });

      console.log(this.history, filtered);
    }
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
          inputSearch={this.state.inputSearch}
          search={this.search}
      
        />
      </div>
    );
  }
}

export default App;
