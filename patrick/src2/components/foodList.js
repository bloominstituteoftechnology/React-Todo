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
          <li>{ this.state.foodArray[0] }</li>
          <li>{ this.state.foodArray[1] }</li>
          <li>{ this.state.foodArray[2] }</li>
          <li>{ this.state.foodArray[3] }</li>
          <li>{ this.state.foodArray[4] }</li>
          <li>{ this.state.foodArray[5] }</li>
          <li>{ this.state.foodArray[6] }</li>
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
