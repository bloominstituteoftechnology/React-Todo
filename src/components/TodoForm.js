import React from 'react';

class TodoForm extends React.Component {
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
    this.props.add(e, this.state.item);
  };

  render() {
    return (
      <>
        <form className='form' onSubmit={this.submitTask}>
          <input
            type='text'
            name='task'
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button className='subBtn' type='submit'>
            Add
          </button>
        </form>
      </>
    );
  }
}
