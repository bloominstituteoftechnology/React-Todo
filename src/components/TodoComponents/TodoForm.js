import React from 'react';
import { Button, Input, Grid } from '@material-ui/core';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  submitTask = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
      task: ''
    });
  };


  render() {
    return (
      <>
        <form>
          <Grid
            justify='space-around'
            spacing='2'
          >
            <Input
              placeholder='Add Task'
              type='text'
              value={this.state.task}
              name='task'
              onChange={this.handleChanges}
            />
            {/* Add state-setting functionality */}
            <Button
              color='primary'
              onClick={this.submitTask}
            >
              Add Task</Button>
          </Grid>
        </form>

      </>
    )
  }
}


export default TodoForm;