/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';
// You'll want to import the necessary components you want the App component to render

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div> Hello World! </div>
    )
  }
}

// const App = () => (
//    {
//      <div>Hello World!</div>
//    }
// );

render(<App />, document.getElementById('root'));
