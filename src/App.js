import React from "react";
import ReactDOM from "react-dom";

import Job from "./job";
import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm'
// import Artist from "./artist";
// import Flavor from "./flavor";
// import UserForm from "./UserForm";

// import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({todos.push(event.target.value))
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault();
  }

  addUser(event) {
    event.preventDefault();
    console.log("works!");
    this.setState({
      text: event.target.value
    });
  }

  handleInput(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        {/* <UserForm addUser={this.addUser} text={this.state.text} /> */}
        {this.state.todos.map(item => <Todo job={item.task} />)}
        {<TodoForm />}

      </div>
    );
  }
}

const rootElement = document.getElementById("root");
export default App
