import React from 'react';

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      item: ''
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      item: e.target.value
    });
    console.log(this.state)
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addTask(this.state.item);
    this.setState({
      item: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="item"
          value={this.state.item}
          placeholder= " ...to-do"
          onChange={this.handleChanges}
        />
        <button>Add to-do</button>
      </form>
    );
  }
}

export default TodoForm;