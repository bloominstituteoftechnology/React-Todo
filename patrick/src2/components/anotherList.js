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
    console.log('This message is from anotherList.js');
    return (
      <div>
        <h1>Another AWESOME List:</h1>
        <ul>
          <li>{ this.state.anotherArray[0] }</li>
          <li>{ this.state.anotherArray[1] }</li>
          <li>{ this.state.anotherArray[2] }</li>
          <li>{ this.state.anotherArray[3] }</li>
          <li>{ this.state.anotherArray[4] }</li>
          <li>{ this.state.anotherArray[5] }</li>
          <li>{ this.state.anotherArray[6] }</li>
        </ul>
        <img src="https://vignette3.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7a/Ponies-meme-generator-did-someone-say-ponies-5707cf.jpeg" alt="Should be a MyLittlePony picture here"/>
      </div>
    )
  }
};

export default AnotherClass;
