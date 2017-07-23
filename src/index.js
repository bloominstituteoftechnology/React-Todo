import React, { Component } from 'react';
import { render } from 'react-dom';
import ListOfNames from './components/listOfToDoItems';
import ToDoInputField from './components/toDoInputField';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'left',
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoList: []
    };
    this.onSave = this.onSave.bind(this);
  }

  componentWillMount() {
    this.setState({toDoList: ['pay bills', 'wash car',
                              'brush teeth', 'take shower',
                              'mend fence', 'solve rubik’s cube',
                              'polish MyLittlePony statues',
                              'snarfle frizzlebops']});
  }

  onSave(text) {
    this.setState({
      toDoList: [...this.state.toDoList, text]
    });
  };

  render() {
    return (
      <div style={styles}>
        <h1>{'\u2740'} Welcom to the Mothership {'\u2740'}</h1>
        <ListOfNames toDoList={this.state.toDoList} />
        <ToDoInputField onSave={this.onSave} />
        <div>{this.state.name}</div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
