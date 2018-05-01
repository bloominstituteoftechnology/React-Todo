import React, {Component} from 'react';
import TodoList from './components/component';

class Todo extends Component {
  constructor() {
    super();
    this.state ={
      listItem: '',
      items: []
    }
  }

handleNameChange = event => {
  // a controlled input
  this.setState({ [event.target.name]: event.target.value });
}; // I DID THIS - Because... REUSABILITY

handleSubmitItem = () => {
  // take this.state.char add it to an array
  // this.setState() to replace the old array
  const items = this.state.listItem;
  const listItem = { name: this.state.listItem, id: this.state.items + items.length  };
  items.push(listItem);
  this.setState({ items: items, listItem: '' });
};
render() {
  // `render` out some JSX
  console.log('Render was called');
  return (
    <div>
      
      {/* 
        take the chars data from state, 
        loop over that data, 
        for each item in chars array, return a dom element 
      */}
      <TodoList items={this.state.items} />
      <input
        name="listItem" // should be known as the state.value of the thing we update
        onChange={this.handleNameChange}
        value={this.state.listItem} // should be bound to the state.value of thing we update
        placeholder="add student to hogwarts"
      />
      <button onClick={this.handleSubmitItem}>Add Char</button>
    </div>
  );
}
}
const App = () => (
  <div>
    <Todo />

  </div>
);

export default Todo;
