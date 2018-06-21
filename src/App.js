import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      list: [
        {task: "milk", id: Date.now(), completed: false},
        {task: "eggs", id: Date.now(), completed: false},
        {task: "butter", id: Date.now(), completed: false}
      ],
      item: ""
    };
  };
  trackInputHandler = event => {
    this.setState({item: event.target.value});
    console.log(event.target.value);
  }
  addItem = e => {
    e.preventDefault();
    const items = this.state.list;
    items.push({task: this.state.item, id: Date.now(), completed: false});
    this.setState({list: items});
    console.log('button worked', items);
  }
  toggleCompleted = e => {
    e.target.classList.toggle('completed');
    console.log(e.target);
  }
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList
          list={this.state.list}
          handler={this.toggleCompleted}
        />
        <TodoForm
          handler={this.trackInputHandler}
          val={this.state.item}
          clickHandler={this.addItem}
        />
      </div>
    );
  }
}

export default App;
