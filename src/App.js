import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      message: 'THE WORLD IS OVER',
    }
  }
  render() {
    return (
      <div>
        <h2>We can do {this.state.message}</h2>
      </div>
    );
  }
}

export default App;
