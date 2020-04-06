import React from 'react';
// import { item } from './domSelector/domSelector';
export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }

  // Handles Input Changes
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  // Submits form and passes content upward.
  submitTask = (e) => {
    e.preventDefault();
    this.setState({ task: '' });
    this.props.add(e, this.state.task);
  };

  render() {
    return (
      <>
        <form className='form' onSubmit={this.submitTask}>
          <input
            type='text'
            className='task'
            name='task'
            value={this.state.task}
            onChange={this.handleChange}
            placeholder='Add Task: '
          />
          <button className='subBtn' type='submit'>
            Add
          </button>
        </form>
      </>
    );
  }
}
