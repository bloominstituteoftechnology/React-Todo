import React from 'react';
// import ReactDOM from "react-dom";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();

    this.state = {
      message : '',
    }
  }

  handleToDoInput = event => {
    console.log(event.target.value);
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h2>Message: {this.state.message}</h2>
        <input
          type = "text"
          placeholder = "To do"
          onClick = {this.handleToDoInput}
        />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default App;
