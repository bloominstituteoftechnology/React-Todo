import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

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

  createTodoItem(task) {

    return {

      task: task,
      id: Date.now(),
      completed: false

    }

  }

  btnClick(e) {

    e.preventDefault();

    if (e.target.name == 'submit') {

      console.log(this.state.formInput);

      this.setState({
        todoItems: [...this.state.todoItems, this.createTodoItem(this.state.formInput)],
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
        <TodoList list={this.state.todoItems} />
      </div>
    );
  }
}

export default App;
