import React from 'react';
import ToDoList from './components/TodoComponents/ToDoList.js';
import ToDoForm from './components/TodoComponents/ToDoForm.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: [],
      inputText: ""
    };
  }

  addToDo = event => {
    event.preventDefault();

    if (this.state.inputText)
    this.setState({
      todos: [...this.state.todos,  {task:this.state.inputText, id:Date.now(), completed:false}],
      inputText: ""
    });
  };

  addItem = event => {
    event.preventDefault();
    if(this.state.textField){
      this.setState({
        todo_items: [...this.state.todo_items, {task:this.state.textField, id: Date.now(), completed:false}],
        textField: ""
      });
    }
  };

  clearComplete = event => {
    event.preventDefault();
    console.log("default prevented");
  };

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  render() {
    return (
     <div>
      <ToDoList todos={this.state.todos} />
      <ToDoForm
        addToDo={this.addToDo}
        inputText={this.state.inputText}
        handleInput={this.handleInput}
      />
     </div>
    );
  }
}

export default App;
