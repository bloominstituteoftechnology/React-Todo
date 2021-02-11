import React from 'react';
import { Form, FormContentContainer, Input, Button } from './Styles';

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
        <FormContentContainer>

        <Input
          type='text'
          name='task'
          placeholder='Write a New Task'
          value={this.state.task}
          onChange={this.handleChanges}
        />

        <Button>Add</Button>

        </FormContentContainer>
      </Form>
    )
  }
}

export default TodoForm
