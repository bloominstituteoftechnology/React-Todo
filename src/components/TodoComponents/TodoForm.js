import React from 'react';
// import { withFormik, Form, Field } from "formik";

class TodoForm extends React.Component{
  //constructor with corresponding state
  constructor(props) {
    super(props);
    this.state ={
      todoText: ""
    }
  }

  changeHandler = e => {
    //update our state with changes to the form
    this.setState({ todoText: e.target.value });

  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addTask(this.state.todoText);
    this.setState({ todoText: "" });
    console.log("props.error: ", this.error);
  }

  submitClear = e => {
    e.preventDefault();
    this.props.clearTask();
  }

  render() {
    return(
      <form onSubmit={this.submitHandler}>
        {/* This is needs to be controlled */}
        <input
          type= 'text'
          name= 'todoText'
          placeholder= "New Task"
          value= {this.state.todoText}
          onChange= {this.changeHandler}
           />{' '}
        <button type='submit'>Add</button>
        <br />
        <br />
        <button onClick={this.submitClear}>Clear Completed</button>
      </form>
    );
  }

}

export default TodoForm;
