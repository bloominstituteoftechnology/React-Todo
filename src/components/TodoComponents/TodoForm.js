import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <div className="todoForm">
        <input placeholder="enter task" onChange={this.handleInputChange}/>
        <button onClick={this.props.onItemAdd}>Add todo</button>
        <button>Clear completed</button>
      </div>
    );
  }
}

export default TodoForm;