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

      console.log(this.state.formInput);

      this.setState({
        todoItems: [...this.state.todoItems, this.state.formInput],
        formInput: ''
      });

    }

    else if (e.target.name == "clear"){

      this.setState({

        todoItems: [],
        formInput: ''

      });

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
        <TodoForm entryHandler={this.formEntry} btnHandler={this.btnClick} formInput={this.state.formInput}/>
      </div>
    );
  }
}

export default App;
