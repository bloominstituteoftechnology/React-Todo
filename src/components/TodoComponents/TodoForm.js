import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <div className="todoForm">
        <input placeholder="enter task" onChange={this.props.onItemText} value={this.props.newTask}/>
        <button onClick={this.props.onItemAdd} onKeyPress={this.props.onItemAddKey}>Add todo</button>
        <button>Clear completed</button>
      </div>
    );
  }
}

export default TodoForm;