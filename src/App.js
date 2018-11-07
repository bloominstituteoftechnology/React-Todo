import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {

  constructor() {

    super();

    this.state = {

      todoItems: [],
      inputText: ''

    }

  }

  formSubmit(e) {

    e.preventDefault();

    console.log("SUBMITTED FORM");

  }

  render() {
    return (
      <div>
        <TodoForm submitHandler={this.formSubmit} inputText={this.state.inputText}/>
      </div>
    );
  }
}

export default App;
