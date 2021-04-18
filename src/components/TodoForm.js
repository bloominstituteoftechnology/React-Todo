import React from "react";
import { Button, TextField } from "@material-ui/core";

class TodoForm extends React.Component {

  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

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
  };

  render() {
    return (
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
    );
  }
}

export default TodoForm;
