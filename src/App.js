import React from "react";
import "./App.css";

//implement logic to not add a item if the text input is blank

//remove the todo from array

//stylelize

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: []
    };
  }
  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  addToDo = input => {
    //if the input has a length then execute
    if (input.length) {
      let toDoArray = this.state.list;
      toDoArray.push(input);
      this.setState({
        list: toDoArray,
        //sets
        userInput: ""
      });
    }
  };

  //making a copy of this.state.list so we don't directly change the state

  removeToDo = () => {
    let toDoArray = this.state.list.splice();
    this.setState({
      list: toDoArray
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main-container">
          <h1 className="title">To Do List by Jared Cooper</h1>
          <input
            className="input-form"
            onChange={e => {
              this.changeUserInput(e.target.value);
            }}
            value={this.state.userInput}
            type="text"
            placeholder="to do..."
          />
          <button
            className="onlyBtn"
            onClick={e => {
              this.addToDo(this.state.userInput);
            }}
          >
            Add
          </button>

          <button
            className="onlyBtn"
            onClick={e => {
              this.removeToDo();
            }}
          >
            Remove
          </button>

          <ul className="only-ul">
            {this.state.list.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
