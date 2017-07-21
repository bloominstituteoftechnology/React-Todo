import React, { Component } from 'react';

// require('!style-loader!css-loader!sass-loader!./index.scss');


class FavoriteFoodsClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodArray: [`bacon`, `pizza`, `flank steak`, `CHAWKLAT!!!`, `chocolate bacon`, `chocolate pizza`, `chocolate steak`]
    };
  }
  render() {
    console.log('Food List');
    return (
      <div>
        <h1>Food List:</h1>
        <ul>
          <li>{ this.state.anotherArray[0] }</li>
          <li>{ this.state.anotherArray[1] }</li>
          <li>{ this.state.anotherArray[2] }</li>
          <li>{ this.state.anotherArray[3] }</li>
          <li>{ this.state.anotherArray[4] }</li>
          <li>{ this.state.anotherArray[5] }</li>
          <li>{ this.state.anotherArray[6] }</li>
        </ul>
        {/* <ul>
          { this.state.foodArray.map((name, index) => {
            return <li>{name}</li>
          }) }
        </ul> */}
      </div>
    )
  }
};

export default FavoriteFoodsClass;
