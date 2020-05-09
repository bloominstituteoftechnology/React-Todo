import React from 'react';


class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: ''
    };
  }
tasks
  handleChanges = e => {
    this.setState({
      itemName: e.target.value
    });
  };

handleAddTasks = e => {
  e.preventDefault();
  this.props.addItem(this.state.itemName);
};

  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.handleAddTasks}>
        <input
          type="text"
          name="itemName"
          value={this.state.itemName}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;