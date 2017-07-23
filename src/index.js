import React, { Component } from 'react';
import { render } from 'react-dom';
import ListOfNames from './ListOfNames';
import TodoInputField from './TodoInputField';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      nameList: []
    };
    this.onSave = this.onSave.bind(this);
  }



  componentWillMount() {
    this.setState({nameList: ['Ryan', 'Sean', 'Allan', 'Jake', 'Greg', 'Stevie', 'Hannah']});
  }

  onSave = (text) => {
    this.setState({
      nameList: [...this.state.nameList, text]
    });
  };

  render() {
    return (
      <div style={styles}>
        <h2>Start editing to see some magic happen {'\u2728'}</h2>
        <ListOfNames nameList={this.state.nameList} />
        <TodoInputField onSave={this.onSave} />
        <div>{this.state.name}</div>
      </div>
      )
    }
}

render(<App />, document.getElementById('root'));
