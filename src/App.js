import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    }
  }

  handleUpdateState = () => {


  };

  handleInputChange = event => {
    this.setState({ message: event.target.value })
  };
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <input type="text" placeholder="...to do" onChange={this.handleInputChange} />
        <button onClick={this.handleUpdateState}>Add ToDo</button>
        <button>Clear Completed </button>
      </div>
    );
  }
}

export default App;
