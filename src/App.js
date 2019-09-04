import React from 'react';

class App extends React.Component {
  constructor() {
    super();
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
     this.state={
       todo: ""
    };
  }

  render () {
    return (
      <div>
        <h1>Mommy Madness!</h1>
        <h3>{this.state.todo}</h3>
        <input type='text' placeholder='New Item'/> 
        <div className="buttons">
        <button onClick={this.handleSingleClickEvent}> Add ToDo </button>
        <button> Clear Completed </button>
        <button> Panic!! </button>
        </div>
      </div>
     );
    }
  }
export default App;
