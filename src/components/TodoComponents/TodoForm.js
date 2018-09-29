import React from 'react';
import './Todo.css';


class TodoForm extends React.Component {

  render() {
    return (
      <div className="todo-form">

        <input onFocus={this.props.controller.focusHandler}
               onBlur={this.props.controller.blurHandler}
               onChange={this.props.controller.inputHandler}
               value={this.props.controller.state.inputValue} />

        <div className='button-holder'>
            <button onClick={this.props.controller.addHandler}>Add Todo</button>
            <button onClick={this.props.controller.clearHandler}>Clear Completed</button>
        </div>

      </div>
    );
  }
}

export default TodoForm;
