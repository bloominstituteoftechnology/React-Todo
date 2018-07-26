import React from "react";
import ToDoList from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
      ],

      input: ""
    };
  }
  // arrow functions automatically binds .this keyword to the function;
  handleInputChange = event => {

    this.setState({ input: event.target.value });
  };

  addToDo = event => {
    event.preventDefault();

    const todoSt = this.state.todos.slice(); // we do this step in the function to not override state.
    todoSt.push({
      task: this.state.input,
      id: Date.now(),
      completed: false
    });
    this.setState({ todos: todoSt });
    this.setState({ input: "" });
  };

  toggleComplete = (id) => {
    const toggler = this.state.todos.slice();
    toggler.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      } else {
        return item;
      }
    });
    this.setState({ todos: toggler });
  };

  // done = (id) => {
  //   const doner = this.state.todos.slice();
  //   doner.map(item => {
  //     if (item.completed) {
        
  //     }
  //   })

  // }

  render() {
    return (
      <div>
        <h1> TO DO? </h1>
        
  

        <ToDoList arrayProp={this.state.todos}
        toggleComplete={this.toggleComplete} />
        <ToDoForm
          value={this.state.input}
          handleInputChange={this.handleInputChange}
          addToDo={this.addToDo}
        />
      </div>
    );
  }
}
export default App;