import React from 'react';

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      todoText: ''
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      todoText: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.todoText);
  };
  
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="item"
          value={this.state.todoText}
          onChange={this.handleChanges}
        />
        <button>Add</button>
       
        
      </form>
    );
  }
}

export default TodoForm;
