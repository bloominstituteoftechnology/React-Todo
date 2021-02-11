import React from 'react';
import { Form, Input, Button } from './Styles';

class TodoForm extends React.Component {
  constructor(){
    super();
    this.state = {
      task: '',
    }
  }

  handleChanges = evt => {
    this.setState({ 
      task: evt.target.value 
    })
  }

  submitTask = evt => {
    evt.preventDefault();
    this.setState({ task: '' });
    this.props.addTask(this.state.task, evt)
  }

  render(){
    return(
      <Form onSubmit={this.submitTask}>
        
        <Input
          type='text'
          name='task'
          placeholder='Write a New Task'
          value={this.state.task}
          onChange={this.handleChanges}
        />

        <Button>Add</Button>

      </Form>
    )
  }
}

export default TodoForm
