import React from 'react';

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      newItem: ''
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({ newItem: e.target.value });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.newItem);
    this.setState({
      newItem: ''
    });
  };

  // lifecycle method - in charge of _Rendering_ JSX to the DOM
  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          value={this.state.newItem}
          onChange={this.handleChanges}
          type="text"
          name="item"
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
