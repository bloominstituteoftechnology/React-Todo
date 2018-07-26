import React from 'react';
import './App.css';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {list: [{id: Date.now(), item: 'Sample', completed: false, classname: ''}], message: ''};
    this.inputHandler = this.inputHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  inputHandler() {
    if(this.state.message.length > 0){
      const todoList = this.state.list;
      todoList.push({
        id: Date.now(), item: this.state.message, completed: false
      });
      this.setState({ list: todoList });
      this.setState({ message: '' });
      document.querySelector('.input').value = '';
    }
  };

  handleInputChange = event => {
    this.setState({ message: event.target.value });
  };

  toggleComplete = event => {
    let lists = this.state.list;
    for(let i=0;i<lists.length;i++){
      if (lists[i].id == event.target.id) {
        if(lists[i].completed) {
          lists[i].completed = false;
          lists[i].classname = '';
        }else {
          lists[i].completed = true;
          lists[i].classname = 'complete';
        }
      }
    }
    this.setState({ list: lists });
  };

  clearComplete = () => {
    let list = this.state.list;
    list = list.filter(e => !e.completed);
    this.setState({ list: list });
  }

  annihilate = () => this.setState({ list: [] });

  render() {
    return (
      <div>
        <h2>My Todo App!</h2>
        <Todo annihilate={this.annihilate} clearComplete={this.clearComplete} toggleComplete={this.toggleComplete} todoList={this.state.list} submit={this.inputHandler} onchange={this.handleInputChange}/>
      </div>
    );
  }
}

export default App;
