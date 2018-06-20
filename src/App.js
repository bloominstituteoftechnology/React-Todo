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
      list: ["milk",
        "eggs",
        "butter"],
      item: ""
    };
  }
  trackInputHandler = event => {
    this.setState({item: event.target.value});
    console.log(event.target.value);
  }
  addItem = () => {
    const items = this.state.list;
    items.push(this.state.item);
    this.setState({list: items});
    console.log('button worked', items);
  }
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList list={this.state.list} />
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
