/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';
import ListOfNames from './listOfNames';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredList: [],
    };
  }

  componentWillMount() {
    this.setState({ingredList: ['Onoin', 'Olive', 'Cheese', 'Chicken', 'Tomatoes']});
  }

  render() {
    return (
      <div style={styles}>
        <h2>Start selecting to make your Pizza {'\u2728'}</h2>
        <ListOfNames ingredList={this.state.ingredList} />
      </div>
      )
    }
}

render(<App />, document.getElementById('root'));
