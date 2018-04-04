import React, { Component } from 'react';


// const App = () => (
//   <div>
//     <h2>Todo App</h2>

//   </div>
// );


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

  class App extends Component {
    constructor() {
      super();
      this.state = {
        newTodo: "",
        todo: ["Git", "Gud", "at", "Coding"]
      };
    }

    
    handleAddTodo = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    handleSubmitTodo = () => {
      const { todo } = this.state;
      todo.push(this.state.newTodo);
      this.setState({ todo, newTodo: "" });
    };
  
    render() {
      return (
        <div style={styles}>
          <h2>Welcome to my List of todo stuff</h2>
          <todoList {...this.state} />
          <input
            type="text"
            name="newTodo"
            value={this.state.newTodo}
            placeholder="add todo"
            onChange={this.handleAddTodo}
          />
          <button onClick={this.handleSubmitTodo}>Add Todo</button>
        </div>
      );
    }
  }
  
  // ReactDOM.render(<App />, document.getElementById("root"));


export default App;
