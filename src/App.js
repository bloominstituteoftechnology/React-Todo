import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  {
    task: "Organize Garage",
    id: Date.now(),
    completed: false
  },
  {
    task: "Bake Cookies",
    id: Date.now(),
    completed: false
  },
  {
    task: "Dude Man",
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todoData,
      inputText: '',
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  };

  //now i need to add todo adding functionality
  addTodo = ev => {
    console.log('buttonCLICKED');
    ev.preventDefault();
    this.setState({
      todo: [
        ...this.state.todo,
        { task: this.state.inputText }],
      inputText: ''
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome! Add in a few tasks here, friendo!</h1>
        <TodoList todo={this.state.todo} />
        <TodoForm 
        addTodo={this.addTodo}
        inputText={this.state.inputText}
        handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
