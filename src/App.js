import React from 'react';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      task: 'take out'
    }
  }



  render() {
    return (
      <div>
        <ul>{this.state.task}</ul>
      </div>

    );
  }
}

export default App;
