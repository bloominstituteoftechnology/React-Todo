import React from 'react';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      title: 'This is Ems Todo List'
    }
  }



  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>

    );
  }
}

export default App;
