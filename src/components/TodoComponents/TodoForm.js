import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form>
        <input
          className="task-item"
          type="text"
          placeholder={"Enter Something To Do"}
        />

        <button onClick={this.props.newTask}>Add</button>
        <button onClick={this.props.remove}>Remove Finished</button>
      </form>
    );
  }
}

export default TodoForm;
