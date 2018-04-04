import React, { Component }from 'react';
import ToDoList from "./components/ToDoList";

// const App = () => (
//   <div>
//     <h2>Todo App</h2>

//   </div>
// );

const generalStyle = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  constructor() {
      super();
      this.state = {
        newToDo:"",
        toDos:[]
      }
  }

  handleNewToDo = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmitToDo = () => {
    const {toDos} = this.state;
    toDos.push(this.state.newToDo);
    this.setState({ toDos, newToDo: ""});
  }

  render() {
      return(
        <div style={generalStyle}>
          <h1>To Do List</h1>
          <ToDoList {...this.state} />
          <input
            type="text"
            name="newToDo"
            value={this.state.newToDo}
            placeholder="Item to do"
            onChange={this.handleNewToDo}
          />
          <button onClick={this.handleSubmitToDo}>Submit</button>
        </div>
      )
  }
}

App.defaultProps = {
  'completed': false
}

export default App;
