import React, { Component } from 'react';
import { render } from 'react-dom';
import ListOfToDoItems from './components/listOfToDoItems.js';
import ToDoInputField from './components/toDoInputField.js';

const styles = {
  fontFamily: 'san-serif',
  textAlign: 'center',
};

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      toDoList: [],
      toDoItem: '',
    };
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  componentWillMount() {
    this.setState({toDoList: ['pay bills', 'wash car', 'brush teeth', 'take shower', 'mend fence', 'solve rubik’s cube', 'polish MyLittlePony statues', 'snarfle frizzbopples']});
  }

  onHandleChange(event) {
    this.SetState({toDoItem: event.target.value});
  }

  render() {
    console.log('WHERE IS THE WEBPAGE???');
    return (
      <div style={styles}>
        <h1>Welcome to the Mothership { '\u2740' }</h1>
        <ListOfToDoItems propToDoList={ this.state.toDoList }/>
        <ToDoInputField change={ this.onHandleChange }/>
        <div>{ this.state.toDoItem }</div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
