import React from 'react';

class TodoForm extends React.Component {

  render() {
    return (
      <form className="todoForm" onSubmit={this.props.onItemAdd}>
        <input placeholder="enter task" onChange={this.props.onItemText} value={this.props.newTask}/>
        <button type="submit" >Add todo</button>
        <button onClick={this.props.onClearCompleted}>Clear completed</button>
      </form>
    );
  }
}

export default TodoForm;