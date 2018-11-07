import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {

  constructor() {

    super();

    let todoList = [];

    if (localStorage.todoCount) {

      for (let i = 0; i < localStorage.todoCount; i++) {

        todoList.push(JSON.parse(localStorage[`todo${i}`]));

      }

    }

    this.state = {

      todoItems: todoList,
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

      const newItems = [...this.state.todoItems, this.createTodoItem(this.state.formInput)];

      this.setState({
        todoItems: newItems,
        formInput: ''
      });

      localStorage.todoCount = newItems.length;

      for (let i = 0; i < newItems.length; i++) {

        localStorage[`todo${i}`] = JSON.stringify(newItems[i]);

      }

    }

    else if (e.target.name == "clear"){

      this.setState({

        todoItems: [],
        formInput: ''

      });

      localStorage.clear();

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
