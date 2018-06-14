import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      greeting: "Hello To Do List!",
      todos: [
        "shopping",
        "cleaning",
        "buying new car",
        "renting a storage unit",
      ],
      todo: ""
    };
  };
  
  changeGreetingHandler = event => {
    console.log(event.target.value);
    this.setState({ todo: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>{this.state.greeting}</h2>
        <input
          type="text"
          onChange={this.changeGreetingHandler}
          placeholder="add todo"
          value={this.state.todo}
        />
        <button onSubmit={this.addToDo}> Add To Do </button>
        <ToDoList allChores={this.state.bands} />
      </div>
    );
  };
};

export default App;