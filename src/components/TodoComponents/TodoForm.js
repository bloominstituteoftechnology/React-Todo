import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form>
        <input
          type="text"
          placeholder={"Enter Something To Do"}
        />

        <button onClick={this.props.newTask}>Add to List</button>
        <button onClick={this.props.remove}>Remove Completed</button>
      </form>
    );
  }
}

export default TodoForm;
