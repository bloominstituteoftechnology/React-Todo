import React from "react";

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

  addToDo = (input) => {
    //making a copy of this.state.list so we don't directly change the state
    let toDoArray = this.state.list;
    toDoArray.push(input);
    this.setState({
      list: toDoArray
    })
  }

  render() {
    return (
      <div className="main-container">
        <h1>To Do List by Jared Cooper</h1>
        <input
          onChange={e => {
            this.changeUserInput(e.target.value);
          }}
          value={this.state.userInput}
          type="text"
          placeholder="Type a todo"
        />
        <button onClick={(e) => {
          this.addToDo(this.state.userInput)
        }}>Add</button>

        <ul>
          {this.state.list.map( (item) => 
            <li>{item}</li>
          )}
        </ul>

      </div>
    );
  }
}

export default App;
