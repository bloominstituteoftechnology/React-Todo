import React from 'react';
//components are all located in './components/TodoComponents/
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: [],
      inputText: '',
    };
  }

  addTodo = (event) => {
    //this function updates the Todo list
    event.preventDefault();
    //we need to prevent blank submissions, like this...
    if (this.state.inputText) {
    this.setState({
      items: [...this.state.items, {task: this.state.inputText, id: Date.now(), completed: false}],
      //After entering the new todo item, we need to clear the input field...
      inputText: '',
    })
  }
}
  toggleComplete = (itemId) => {
    let newItemsArray = [...this.state.items];
    newItemsArray = newItemsArray.map((item) => {
    if (itemId === item.id) {
      item.completed = !item.completed;
    }
    return item;
})
  this.setState({
    items: newItemsArray
  })
}


  handleInput = (event) => {
    this.setState({
      inputText: event.target.value
    });
  }


  render() {
    return (
      <div>
        <h1>The Hacker To-Do list!</h1>
        <TodoList items={this.state.items} toggleComplete={this.toggleComplete}/>
        <TodoForm
        addTodo={this.addTodo} inputText={this.state.inputText}
        handleInput={this.handleInput}
        handleClick={this.handleClick}
        />

      </div>
    );
  }
}

export default App;
