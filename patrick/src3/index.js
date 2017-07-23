import React, { Component } from 'react';
import { render } from 'react-dom';
import ListOfToDoItems from './components/listOfToDoItems.js';
import ToDoInputField from './components/toDoInputField.js';

const styles = {
  fontFamily: 'san-serif',
  textAlign: 'center',
};

class App extends Component {
  // constructor(props) {
  constructor() {
    super();
    this.state = {
      toDoList: []
      // toDoItem: '',
    };
    // this.onHandleChange = this.onHandleChange.bind(this);
  }

  componentWillMount() {
    this.setState({toDoList: ['pay bills', 'wash car',
                              'brush teeth', 'take shower',
                              'mend fence', 'solve rubik’s cube',
                              'polish MyLittlePony statues',
                              'snarfle frizzlebops']});
  }

  // onHandleChange(event) {
  //   this.setState({toDoItem: event.target.value});
  // }

  onSave = (text) => {
    this.setState({
        toDoList: [...this.state.toDoList, text]
    });
  };

  render() {
    console.log('DID THE WEBPAGE COMPILE???');
    return (
      <div style={ styles }>
        <h1>Welcome to the Mothership { '\u2740' }</h1>
        {/* <ListOfToDoItems propsToDoList={ this.state.toDoList }/>
        <ToDoInputField propsChange={ this.onHandleChange }/> */}
        <ListOfToDoItems toDoList={ this.state.toDoList }/>
        <ToDoInputField onSave={ this.onSave }/>
        <div>{ this.state.toDoItem }</div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));

// EXTRA CREDIT
// componentWillMount() {
//   this.setState({
//     todoList: [{'text': 'pay bills', 'completed': false },
//            {'text': 'wash car', 'completed': false },
//            {'text': 'brush teeth', 'completed': false },
//            {'text': 'take shower', 'completed': false },
//            {'text': 'mend fence', 'completed': false },
//            {'text': 'solve rubik's cube, 'completed': false },
//            {'text': 'polish MyLittlePony statues', 'completed': false },
//            {'text': 'snarfle frizzelbops', 'completed': false },
//          ],
//   });
// }
