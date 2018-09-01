import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import "./TodoForm.css";

export default class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      body: "",
      newTodo: false,
      complete: false
    };

    // *** Create Refs ***
    this.input = React.createRef();
    this.textAreaRef = React.createRef();
  }

  onChangeHandler = e => {
    // Use input name attribute to setup onchange listner that can be reused for all inputs!
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTodo = e => {
    // prevent form from submitting to non-existant server
    e.preventDefault();

    // set time with moment.js before running addTodo function
    // run the "addTodo" function passed down from App in the following manner:
    // App --> TodoList --> TodoForm(execute function and it will "bubble back up" like the following:) Todoform --> TodoList --> App
    this.props.addTodo(
      this.state.inputText,
      moment().format("LLLL"),
      this.state.body,
      this.state.complete
    );

    // Reset the value of this components state inputText back to blank
    this.setState({
      inputText: "",
      body: "",
      time: "",
      complete: false,
      newTodo: !this.state.newTodo
    });
    // Using the ref I created on the input element and instantiated on line 10 in the constructor, I reset the input value (on the physical web page the user sees) back to blank
    this.input.current.value = "";
    this.textAreaRef.current.value = "";
  };

  toggleForm = () => {
    this.setState({ newTodo: !this.state.newTodo });
  };

  render() {
    // Alternate between plus and form for new todo item :)
    const todoForm = this.state.newTodo ? (
      // if true return form
      <form className="todo-form" onSubmit={this.addTodo}>
        <input
          ref={this.input}
          name="inputText"
          type="text"
          placeholder="...todo"
          onChange={this.onChangeHandler}
          autoFocus
          autoCapitalize="sentences"
          required
        />
        <textarea
          rows="15"
          name="body"
          placeholder="Todo Details Here"
          onChange={this.onChangeHandler}
          ref={this.textAreaRef}
          required
        />
        <div className="buttons">
          <button className="add-todo btn color-black">Add Todo </button>
        </div>
      </form>
    ) : (
      // if false return plusSquare icon from fontawesome :)
      <div className="plus-container">
        <FontAwesomeIcon
          icon={faPlusSquare}
          size="3x"
          color="green"
          onClick={this.toggleForm}
        />
      </div>
    );

    return (
      // using a Fragment b/c there is no since in creating a new div or other container element when everything is contained already :). I think having to having to have a container on everything in the first place is kinda annoying at times and is the source for many errors, especially for beginner :=(
      <React.Fragment>{todoForm}</React.Fragment>
    );
  }
}
