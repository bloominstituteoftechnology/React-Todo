import React from 'react'

class TodoForm extends React.Component {

  state = { textInput: '' }

  setText = (e) => this.setState({ textInput: e.target.value });

  render() {
    const { textInput } = this.state;
    const { onAddTask, onClearCompleted } = this.props;

    return (
      <div>
        <input
          type="text"
          onChange={this.setText}
          value={textInput} />
        <button onClick={() => onAddTask(textInput)} >Add Task</button>
        <button onClick={onClearCompleted}>Remove completed tasks</button>
      </div>);
  }
}
export default TodoForm; 