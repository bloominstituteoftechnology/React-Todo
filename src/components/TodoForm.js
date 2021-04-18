import React from "react";
<<<<<<< HEAD
import { Button, TextField } from "@material-ui/core";

class TodoForm extends React.Component {

=======
import "bootstrap/dist/css/bootstrap.css";

class TodoForm extends React.Component {
>>>>>>> 5d52c623f0d15e4a8a8d99500c60f06a718d8e18
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }
<<<<<<< HEAD

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      task: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({
      ...this.state,
      task: "",
    });
=======
  changeHandler = (e) => {
    console.log(e.target.value);
    this.setState({ task: e.target.value });
  };

  submitTask = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({ ...this.state, task: "" });
>>>>>>> 5d52c623f0d15e4a8a8d99500c60f06a718d8e18
  };

  render() {
    return (
<<<<<<< HEAD
      <div>
        <form
          className="d-flex flex-row flex-wrap justify-content-center align-items-center"
          onSubmit={this.handleSubmit}
        >
          <TextField
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
            placeholder="Mission Entry"
            variant='outlined'
            label='Mission Entry'
            style={{backgroundColor: '#AAA'}}
          />
          <Button
            className="btn"
            type="medium"
            size="medium"
            variant="outlined"
            style={{margin: '5vh 3vw', color: 'red', boxShadow: '0 0 2vh #660000'}}
          >
            Enter Assignment
          </Button>
        </form>
      </div>
=======
      <form className='d-flex flex-column justify-content-center' style={{maxWidth: '80%', alignSelf: 'center'}}onSubmit={this.submitTask}>
        <input
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.changeHandler}
          placeholder="input your goal"
          style={{
            boxShadow: "-1rem -1rem 1rem #362819	",
            color: "white",
            backgroundColor: "black",
            borderRadius: '10px',
            textAlign: 'center,',
            padding: '1.5rem 0',
            fontSize: '1.2rem'
          }}
        />
        <button className='btn' type="submit">
          {" "}
          +{" "}
        </button>
        <span style={{padding: '3rem'}}>Touch your goal then press the goal accomplished button to clear it away</span>
      </form>
>>>>>>> 5d52c623f0d15e4a8a8d99500c60f06a718d8e18
    );
  }
}

export default TodoForm;
