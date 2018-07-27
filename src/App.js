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

      stuff: ""
    };
  }
  // arrow functions automatically binds .this keyword to the function;
  handleInputChange = event => {

    this.setState({ stuff: event.target.value });
  };

  addToDo = event => {
    event.preventDefault();

    const todoSt = this.state.todos.slice(); // we do this step in the function to not override state.
    todoSt.push({
      task: this.state.stuff,
      id: Date.now(),
      completed: false
    });
    this.setState({ todos: todoSt });
    this.setState({ stuff: "" });
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

  done = (event) => {
    event.preventDefault();
    let donut = this.state.todos.slice();
    donut= donut.filter(item => !item.completed);
    this.setState({todos:donut})
  }

  render() {
    return (
      <div>
        <h1> TO DO or NOT TO DO? </h1>
        <h3> ...that is the question </h3>
  
        
        <ToDoList arrayProp={this.state.todos}
        toggleComplete={this.toggleComplete} />
        <ToDoForm
          value={this.state.stuff}
          handleInputChange={this.handleInputChange}
          addToDo={this.addToDo}
          done={this.done}
        />
      </div>
    );
  }
}
export default App;
