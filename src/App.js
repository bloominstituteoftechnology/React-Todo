import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {

  constructor() {

    super();

    this.state = {

      todoItems: [],
      formInput: ''

    }

    this.btnClick = this.btnClick.bind(this);
    this.formEntry = this.formEntry.bind(this);

  }

  btnClick(e) {

    e.preventDefault();

    if (e.target.name == 'submit') {

      console.log("button 1 clicked");

    }

    else {

      console.log('button 2 clicked');

    }

  }

  formEntry(e) {

    this.setState({

      [e.target.name]: e.target.value

    });

  }

  render() {
    return (
      <div>
        <TodoForm entryHandler={this.formEntry} btnHandler={this.btnClick} inputText={this.state.inputText}/>
      </div>
    );
  }
}

export default App;
