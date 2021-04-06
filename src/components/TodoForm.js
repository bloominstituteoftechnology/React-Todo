import React from "react";
import useStyles from "../stylesheets/useStyles";
import { Button, TextField } from "@material-ui/core";

class TodoForm extends React.Component {
  
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

  render() {
    return (
      <div className="display-3">
        <form>
            <h1>Todo Form</h1>
          <TextField
            type="text"
            name="task"
            value=""
            // onChange={this.handleChange}
            placeholder="Gotta Do It!"
            color="primary"
          />
          <Button type="medium" size="medium" variant="outlined">
            Fire!
          </Button>
        </form>
      </div>
    );
  }
};

export default TodoForm;
