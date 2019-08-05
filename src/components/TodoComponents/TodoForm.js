//will hold input field and Add Todo and Clear Completed buttons
//Input field shouldt take in user input and allow a user to press Enter or click on the submit button to add a todo to the list
//Once submitted, todo List should re-render and show the added todo

import React from 'react';

import Todo from './Todo';
import TodoList from './TodoList';

class TodoForm  extends React.Component {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased)
constructor(){
    super();
    this.state = {
        item: ''
    };
}

handleChanges = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
}

submitTask = event => {
    event.preventDefault();
    this.props.addTask(this.state.item)
    console.log('Supposed to be submitting', this.state)
};



render() {
    console.log(this.props, 'this.props')
  return (
      <>
    <form onSubmit={this.submitTask}>
    <input
      type="text"
      value={this.state.item}
      name="item"
      onChange={this.handleChanges}
    />
    <button>Add Todo</button>
    
  </form>
  <button onCLick={this.props.clearTask}>Clear Completed</button>
  </>
  );
};
}

export default TodoForm;
