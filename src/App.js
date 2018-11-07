import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './App.sass';

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
      formInput: '',
      searchInput: '',
      filteredItems: todoList

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

    if (e.target.name == 'submitButton') {

      const newItems = [...this.state.todoItems, this.createTodoItem(this.state.formInput)];

      this.setState({
        todoItems: newItems,
        formInput: ''
      }, this.filterItems);

      localStorage.todoCount = newItems.length;

      for (let i = 0; i < newItems.length; i++) {

        localStorage[`todo${i}`] = JSON.stringify(newItems[i]);

      }

    }

    else if (e.target.name == "clearButton"){

      this.setState({

        todoItems: [],
        formInput: '',
        filteredItems: []

      });

      localStorage.clear();

    }

  }

  formEntry(e) {

    const name = e.target.name;

    this.setState({

      [e.target.name]: e.target.value

    }, () => {

      if (name == "searchInput") {

        this.filterItems();

      }

    });

  }

  filterItems() {

    this.setState({
      filteredItems: this.state.todoItems.filter(item => item.task.includes(this.state.searchInput))
    });

  }

  render() {
    return (
      <div className='todo-container'>
        <h1>React Todo App</h1>
        <TodoForm entryHandler={this.formEntry} btnHandler={this.btnClick} formInput={this.state.formInput} searchInput={this.state.searchInput}/>
        <TodoList list={this.state.filteredItems} />
      </div>
    );
  }
}

export default App;
