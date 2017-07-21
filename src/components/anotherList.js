import React, { Component } from 'react';

// require('!style-loader!css-loader!sass-loader!./index.scss');


class AnotherClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anotherArray: [`yup`, `it`, `is`, `another`, `amazing`, `list`, `wahoo!`]
    };
  }
  render() {
    console.log('Check me out in the Chrome Dev Tools!');
    // alert('It works!');
    return (
      <div>
        <h1>Another List:</h1>
        <ul>
          <li>{ this.state.anotherArray[0] }</li>
          <li>{ this.state.anotherArray[1] }</li>
          <li>{ this.state.anotherArray[2] }</li>
          <li>{ this.state.anotherArray[3] }</li>
          <li>{ this.state.anotherArray[4] }</li>
          <li>{ this.state.anotherArray[5] }</li>
          <li>{ this.state.anotherArray[6] }</li>
        </ul>
      </div>
    )
  }
};

export default AnotherClass;
