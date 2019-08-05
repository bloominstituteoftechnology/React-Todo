import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    return (
      <>
        <form>
          <input onChange={this.props.changeNewTodoText} />
        </form>
      </>
    );
  }
}

export default TodoForm;
