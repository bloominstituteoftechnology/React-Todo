import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [{
        id: Date.now(),
        task: '',
        completed: false
      }],
      todoItem: ''
    }
  }

  changeHandler = event => {
    this.setState({ todoItem: event.target.value });
  }

  addToList = event => {
    event.preventDefault();
    if (this.state.todoItem !== '') {
      const todolist = this.state.todoList.slice()
      todolist.push({ id: Date.now(), task: this.state.todoItem, completed: false})
      this.setState({
        todoList: todolist,
        todoItem: ''
      });
    }
  }

  itemStrike = event => {
    let list = this.state.todoList.slice();
    list.forEach(listItem => {
      if (listItem.task === event.target.innerHTML) {
        if (listItem.completed) {
          listItem.completed = false;
        } else {
          listItem.completed = true;
        }
      }
    })
    this.setState({
      todoList: list
    })
    event.target.classList.toggle('complete');
  }

  clearList = event => {
    event.preventDefault();
    this.setState({
      todoList: []
    });
  }

  clearDone = event => {
    event.preventDefault();
    let current = this.state.todoList
    let newCurrent = current.filter(item => item.completed === false)
    this.setState({
      todoList: newCurrent
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return <div className="container">
        <h1>This is the stuff you need to do!</h1>
        <TodoForm changeHandler={this.changeHandler} itemStrike={this.itemStrike} todoItem={this.state.todoItem} todoList={this.state.todoList} addToList={this.addToList} clearList={this.clearList} clearDone={this.clearDone} />
      </div>;
  }
}

export default App;
